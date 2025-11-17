import React, { useState, useMemo } from 'react';
import type { Table } from '../types';
import { TableIcon, UserGroupIcon, ArrowLeftIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, XMarkIcon } from './common/icons';

interface TableViewProps {
  tables: Table[];
  onSelectTable: (tableId: string) => void;
  onBack: () => void;
  onMergeTables: (tableIds: string[]) => void;
  onUnmergeTable: (mergedTableId: string) => void;
}

const TableCard: React.FC<{ 
  table: Table; 
  onSelect: () => void; 
  onUnmerge?: () => void;
  isMergeMode: boolean;
  isSelected: boolean;
}> = ({ table, onSelect, onUnmerge, isMergeMode, isSelected }) => {
  const statusClasses = {
    available: 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800',
    occupied: 'bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200',
  };

  const mergedClasses = 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800';

  const selectionClasses = isSelected ? 'ring-4 ring-offset-2 ring-brand-primary' : '';
  const mergeModeCursor = isMergeMode && (table.status === 'occupied' || table.isMerged) ? 'cursor-not-allowed' : 'cursor-pointer';

  return (
    <div className="relative">
      <button
        onClick={onSelect}
        disabled={isMergeMode && (table.status === 'occupied' || table.isMerged)}
        className={`w-full rounded-lg border-2 p-4 flex flex-col items-center justify-center aspect-square transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none ${mergeModeCursor} ${table.isMerged ? mergedClasses : statusClasses[table.status]} ${selectionClasses}`}
      >
        <div className="mb-2">
          {table.isMerged ? <UserGroupIcon className="h-10 w-10" /> : <TableIcon className="h-8 w-8" />}
        </div>
        <span className="font-bold text-lg text-center">{table.name}</span>
        <span className="text-sm capitalize">{table.status}</span>
        {table.isMerged && table.componentTables && (
          <p className="text-xs mt-1 text-center">({table.componentTables.map(id => id.toUpperCase()).join(', ')})</p>
        )}
      </button>
      {onUnmerge && table.status === 'available' && (
        <button
          onClick={onUnmerge}
          title="Unmerge Table"
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <ArrowsPointingOutIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};


const TableView: React.FC<TableViewProps> = ({ tables, onSelectTable, onBack, onMergeTables, onUnmergeTable }) => {
  const [isMergeMode, setIsMergeMode] = useState(false);
  const [selectedForMerge, setSelectedForMerge] = useState<string[]>([]);

  const visibleTables = useMemo(() => tables.filter(t => !t.mergedInto), [tables]);

  const toggleSelectForMerge = (tableId: string) => {
    setSelectedForMerge(prev => 
      prev.includes(tableId) ? prev.filter(id => id !== tableId) : [...prev, tableId]
    );
  };
  
  const handleConfirmMerge = () => {
    if (selectedForMerge.length < 2) {
      alert("Please select at least two tables to merge.");
      return;
    }
    onMergeTables(selectedForMerge);
    setIsMergeMode(false);
    setSelectedForMerge([]);
  };

  const handleCancelMerge = () => {
    setIsMergeMode(false);
    setSelectedForMerge([]);
  };

  return (
     <div className="h-full w-full bg-surface-main dark:bg-surface-dark text-text-main dark:text-text-dark-main flex flex-col">
      <header className="flex-shrink-0 bg-surface-card/80 dark:bg-surface-dark-card/80 backdrop-blur-sm p-4 flex items-center justify-between sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
          <button onClick={onBack} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <ArrowLeftIcon className="h-5 w-5" />
              <span className="font-semibold hidden sm:inline">Dashboard</span>
          </button>
          <h1 className="text-xl font-bold">{isMergeMode ? 'Select Tables to Merge' : 'Select a Table'}</h1>
          <div className="flex items-center gap-2">
            {isMergeMode ? (
              <>
                <button onClick={handleConfirmMerge} disabled={selectedForMerge.length < 2} className="px-3 py-2 bg-green-600 text-white font-semibold rounded-lg text-sm hover:bg-green-700 disabled:bg-gray-500 transition-colors">Merge Selected</button>
                <button onClick={handleCancelMerge} className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"><XMarkIcon className="h-5 w-5"/></button>
              </>
            ) : (
              <button onClick={() => setIsMergeMode(true)} className="flex items-center gap-2 px-3 py-2 bg-brand-primary text-white font-semibold rounded-lg text-sm hover:bg-brand-secondary transition-colors">
                <ArrowsPointingInIcon className="h-5 w-5"/>
                <span className="hidden sm:inline">Merge Mode</span>
              </button>
            )}
          </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {visibleTables.map(table => (
            <TableCard 
              key={table.id} 
              table={table} 
              onSelect={() => isMergeMode ? toggleSelectForMerge(table.id) : onSelectTable(table.id)}
              onUnmerge={!isMergeMode && table.isMerged ? () => onUnmergeTable(table.id) : undefined}
              isMergeMode={isMergeMode}
              isSelected={selectedForMerge.includes(table.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TableView;
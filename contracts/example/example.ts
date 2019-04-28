// =====================================================
// WARNING: GENERATED FILE
//
// Any changes you make will be overwritten by Lamington
// =====================================================

import { Account, Contract, TableRowsResult } from 'lamington';

// Table row types
export interface ExampleStateRow {
	count: number;
}

export interface Example extends Contract {
	// Actions
	ping(message: string, options?: { from?: Account }): Promise<any>;
	
	// Tables
	state_row(scope?: string): Promise<TableRowsResult<ExampleStateRow>>;
}


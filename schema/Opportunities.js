cube(`Opportunities`, {
  sql: `SELECT * FROM torre.opportunities`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, internalId, created]
    },
    maxMaxAmount: {
      sql: `${CUBE}.compensation->'$.data.maxAmount'`,
      type: 'max',
      format: 'currency'
    },
    minMaxAmount: {
      sql: `${CUBE}.compensation->'$.data.maxAmount'`,
      type: 'min',
      format: 'currency'
    },
    minMinAmount: {
      sql: `${CUBE}.compensation->'$.data.minAmount'`,
      type: 'min',
      format: 'currency'
    },
    maxMinAmount: {
      sql: `${CUBE}.compensation->'$.data.minAmount'`,
      type: 'max',
      format: 'currency'
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    internalId: {
      sql: `internal_id`,
      type: `string`
    },
    
    objective: {
      sql: `objective`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    created: {
      sql: `created`,
      type: `time`
    },
    
    deadline: {
      sql: `deadline`,
      type: `time`
    },
    compensationCode: {
      sql: `ifnull(${CUBE}.compensation->>'$.data.code', 'undefined')`,
      type: 'string'
    },
    compensationCurrency: {
      sql: `ifnull(${CUBE}.compensation->>'$.data.currency', 'undefined')`,
      type: 'string'
    },
    compensationPeriodicity: {
      sql: `ifnull(${CUBE}.compensation->>'$.data.periodicity', 'undefined')`,
      type: 'string'
    }
  }
});

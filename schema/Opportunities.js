cube(`Opportunities`, {
  sql: `SELECT * FROM torre.opportunities`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, internalId, created]
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
    
    objetive: {
      sql: `objetive`,
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
    }
  },
  
  dataSource: `default`
});

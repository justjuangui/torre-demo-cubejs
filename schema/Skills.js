cube('Skills', {
  sql: `
    SELECT 
      o.id,
        s.*
    FROM 
      torre.opportunities o,
      JSON_TABLE(
        o.skills,
            '$[*]' columns(
          name varchar(100) PATH '$.name',
                experience varchar(100) path '$.experience'
            )
      ) as s
  `,
  joins: {
    Opportunities: {
      relationship: 'hasMany',
      sql: `${Skills}.id = ${Opportunities}.id`
    }
  },
  measures: {
    count: {
      type: 'count',
      sql: 'id'
    },
    countDistinct: {
      type: 'countDistinct',
      sql: 'id'
    }
  },
  dimensions: {
    id: {
      type: 'number',
      sql: 'id',
      primaryKey: true
    },
    name: {
      type: 'string',
      sql: 'name'
    },
    experience: {
      type: 'string',
      sql: 'experience'
    }
  }
})

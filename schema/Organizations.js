cube('Organization', {
  sql: `
    SELECT 
      o.id,
        org.*
    FROM 
      torre.opportunities o,
      JSON_TABLE(
        o.organizations,
            '$[*]' columns(
          organization int PATH '$.id',
          name varchar(100) PATH '$.name',
                picture varchar(300) path '$.picture'
            )
      ) as org
  `,
  joins: {
    Opportunities: {
      relationship: 'hasMany',
      sql: `${Organization}.id = ${Opportunities}.id`
    },
    Skills: {
      relationship: 'hasMany',
      sql: `${Organization}.id = ${Skills}.id`
    }
  },
  measures: {
    count: {
      type: 'count',
      sql: 'organization'
    }
  },
  dimensions: {
    id: {
      type: 'number',
      sql: 'id'
    },
    organization: {
      type: 'number',
      sql: 'organization',
      primaryKey: true
    },
    name: {
      type: 'string',
      sql: 'name'
    },
    picture: {
      format: 'imageUrl',
      type: 'string',
      sql:'picture'
    }
  }
})

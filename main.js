db.people.aggregate([
    {$match:{gender:'female'}},   
    {$project:{_id:0, name:1, email:1}}
]).toArray()

db.articles.aggregate( [
    { $match: { $or: [ { score: { $gt: 70, $lt: 90 } }, { views: { $gte: 1000 } } ] } },
    // { $group: { _id: null, count: { $sum: 1 } } }
  ] );

  db.articles.aggregate([
{$match:{$or:[{score:{$gt:70,$lt:90}},{views:{$gte:1000}}]}}

  ])

  db.articles.aggregate([
    {$match:{$and:[
        {score:{$gt:70,$lte:90}},
        {views:{$gte:1000}},
        ]}}
  ])

  db.persons.aggregate([
    {$match:{gender:'female'}},
    {$match:{nat:'CA'}}
    ]).pretty()
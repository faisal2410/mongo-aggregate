
db.persons.aggregate([
{$match:{gender:'female'}}
]).pretty()


db.persons.aggregate([
{$match:{nat:'CA'}}
]).pretty()


db.persons.aggregate([
{$match:{gender:'female'}},
{$match:{nat:'CA'}}
]).pretty()

db.persons.aggregate([
    {$match:{gender:'female'}},
    {$group:{_id:{state:"$location.street"},totalPersons:{$sum:1}}}
]).pretty()

db.persons.aggregate([
    {$match:{gender:'female'}},
    {$group:{_id:{state:"$location.street"},totalPersons:{$sum:1}}},
    {$sort:{totalPersons:-1}}
]).pretty()

db.persons.aggregate([
    {$match:{gender:'female'}},
    {$group:{_id}}   
]).pretty()

db.persons.aggregate([
    {$project:{name:1}}
])

db.persons.aggregate([
    {$project:{_id:0, fullName:{$concat:["$name.first"," ","$name.last"]}}}
])

db.persons.aggregate([
    {$project:{_id:0,fullName:{$concat:[
        {$toUpper:"$name.first"

    }," ",{$toUpper:"$name.last"}]}}}
])
db.persons.aggregate([
    {$project:{_id:0,fullName:{$concat:[
        {$toUpper:{$substrCP:["$name.first",0,1]}},
        {$substrCP:["$name.first",1,{$subtract:[{$strLenCP:"$name.first"},1]}]},
        " ",
        {$toUpper:{$substrCP:["$name.last",0,1]}},
        {$substrCP:["$name.last",1,{$subtract:[{$strLenCP:"$name.last"},1]}]}]}}}
])

db.persons.aggregate([
{$count:'total'}

])
db.persons.aggregate([
{$sort:{salary:-1}}

])
db.persons.aggregate([
{$sort:{nat:-1}}

])
db.persons.aggregate([
{$limit:10}

])

db.persons.aggregate([
    {$sort:{nat:-1}},
    {$limit:1}
    
    ])

db.persons.aggregate([
    {$match:{"name.first":/r/}}
])
db.persons.aggregate([
    {$match:{"name.first":{$in:[/r/,/a/]}}}
])
db.persons.aggregate([
    {$match:{"name.first":{$ne:[/r/,/a/]}}}
])

db.persons.aggregate([]).toArray()

db.persons.aggregate([
{$count:'total'}
])

db.persons.aggregate(
    [
        {$match:{gender:'male'}},
        {$match:{"name.first":/habacuc/}},
        {$count:'total'}

    ]
)

db.persons.aggregate(
    [
{$match:{gender:'male'}},
{$match:{"location.city":/gon/}},
{$count:'total'}
    ])

db.persons.aggregate(
    [
        {$match:{"name.first":{$in:['mestan','gonca']}}}
    ])

db.persons.aggregate(
    [
        {$match:{"name.first":{$in:['mestan','gonca']}}},
        {$skip:0},
        {$limit:1}
    ]
)
db.persons.aggregate(
    [
        {$match:{"name.first":{$in:['mestan','gonca']}}},
        {$project:{_id:0,name:1 ,salary:1}},
        {$skip:0},
        {$limit:1}
    ]
)

db.persons.aggregate([
    {$match:{gender:'female'}},
    {$group:{_id:"$location.city",'total':{$sum:1}}},
    {$sort:{total:-1}}
])

db.persons.aggregate([
    {$group:{_id:"$location.city",'avg':{$avg:"$salary"}}},
    {$sort:{avg:-1}}
])

db.persons.aggregate([
    {$group:{_id:"$location.city",'max':{$max:"$salary"}}},
    {$project:{_id:0,name:1 ,salary:1}},
])

db.persons.aggregate([
    {$group:{_id:"$location.city",'min':{$min:"$salary"}}}
])

db.persons.aggregate([
    {$group:{_id:0,'sum':{$sum:"$salary"}}}
])
db.persons.aggregate([
    {$group:{_id:0,'avg':{$avg:"$salary"}}}
])
db.persons.aggreate([
    {$group:{_id:0,'max':{$max:"$salary"}}}
])

db.persons.aggregate([
    {$group:{_id:0,'min':{$min:"$salary"}}}
])

db.persons.aggregate([
    {$group:{_id:{"city name":"$location.city","Gender":"$gender"}}}
])
db.persons.aggregate([
    {$group:{_id:{"city name":"$location.city","Gender":"$gender"},'sum':{$sum:"$salary"}}}
])
db.persons.aggregate([
    {$group:{_id:{"city name":"$location.city","Gender":"$gender"},'sum':{$sum:"$salary"},'avg':{$avg:"$salary"},'max':{$max:"$salary"},'min':{$min:"$salary"}}}
])


// $lookup operator

db.products.aggregate([
    {$lookup:{from:"categories",localField:"categoriesID",foreignField:"categoriesID",as:"Category"}}
])

db.products.aggregate([
    {$lookup:{from:"categories",localField:"categoriesID",foreignField:"categoriesID",as:"catDetails"}},
    {$lookup:{from:"brands",localField:"brandID",foeignField:"brandID",as:"brandDetails"}}
])

db.products.aggregate([
    {$lookup:{from:"categories",localField:"categoriesID",foreignField:"categoriesID",as:"catDetails"}},

    {$lookup:{from:"brands",localField:"brandID",foeignField:"brandID",as:"brandDetails"}},

    {$project:{_id:0,categoryID:1,brandID:1,productName:"$name",price:{$toDouble:"$price"},unit:1,details:1,createdDate:1,productId:1,categoryName:{$first:"$category.name"},brandName:{$first:"$brand.name"}}}
])





db.products.aggregate(
    [
{
    $facet:{
        "total":[{$count:"total"}],
        "data":[],
        "samsung":[{$match:{"brandId":"12456"}}]
    }


}


    ])
db.products.aggregate(
    [
{
    $facet:{
        "total":[{$count:"total"}],
        "walton":[{$match:{"brandId":"789789"}}],
        "samsung":[{$match:{"brandId":"12456"}}]
    }


}


    ])


db.products.aggregate([
    {$match:{unit:"lt"}},
    {$addFields:{"newField":{$toInt:["$price"]}}},
    {$addFields:{"newField1":{$toInt:["$price"]}}},
    {$addFields:{"newField2":{$toInt:["$price"]}}},
    {$addFields:{"newField3":{$toInt:["$price"]}}},
])
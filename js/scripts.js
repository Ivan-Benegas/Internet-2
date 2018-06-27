var Table = {
data:[],

setData:function(Data){
    Table.data = Data;
},
listAll:function(){
    for(var i = 0; i < Table.data.length; i++){
        $("#table-body").append(Table.assamble(Table.data[i]));
    }
},
assamble:function(Data){
    return '<div class="row">' +
                '<span class="col-2">' + '</span>' +
                '<span class="col-2">' + Data.brand + '</span>' +
                '<span class="col-2">' + Data.location + '</span>' +
                '<span class="col-2">' + Data.lunch + '</span>' +
                '<span class="col-2">' + Data.price + '</span>' +
                '<span class="col-2">' + '</span>' +
                '<span class="description col-12">' + "" + '</span>' +
                '</div>';
 },
}

function tabla () {
    Table.setData(elementsList);
    Table.listAll();
}

var ListElements={
ListByPrice:function(price){
    for(var i = 0 ; i < ListElements.items.length ; i++){
        if(ListElements.items[i].price < price){
            $("#table-body").append(ListElements.assamble(ListElements.items[i]));
        }
    }
}

$("#action1").on("click",function(){
    var Price = $("#Price") Valor(),
    ListElements.ListByPrice(price);
})
}

ListElements.setData(elementsList)

cleartable:function(){
    $("#table-body") HTML("")
}
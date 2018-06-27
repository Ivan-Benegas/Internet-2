var Table = {
    data:[],


    setData:function(Data){
        Table.data = Data;
    },


    limpiartabla:function(){
        $("#table-body").html("");
    },


    listAll:function(){
        Table.limpiartabla();
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


    listByBrand:function(){
        Table.limpiartabla();
        var input = document.getElementById("BrandInput").value;
        if(input == ""){
            Table.listAll();
        }
        for(var i = 0; i < Table.data.length; i++){
            if(Table.data[i].brand == input){
                $("#table-body").append(Table.assamble(Table.data[i]));
            }
        }
    },


    listByLocation:function(){
        Table.limpiartabla();
        var input = document.getElementById("LocationInput").value;
        if(input == ""){
            Table.listAll();
        }
        for(var i = 0; i < Table.data.length; i++){
            if(Table.data[i].location == input){
                $("#table-body").append(Table.assamble(Table.data[i]));
            }
        }
    },


    listByLaunch:function(){
        Table.limpiartabla();
        var input = document.getElementById("LaunchInput").value;
        if(input == ""){
            Table.listAll();
        }
        for(var i = 0; i < Table.data.length; i++){
            if(Table.data[i].lunch == input){
                $("#table-body").append(Table.assamble(Table.data[i]));
            }
        }
    },


    listByPrice:function(){
        Table.limpiartabla();
        var input = document.getElementById("PriceInput").value;
        if(input == ""){
            Table.listAll();
        }
        for(var i = 0; i < Table.data.length; i++){
            if(Table.data[i].price == input){
                $("#table-body").append(Table.assamble(Table.data[i]));
            }
        }
    },
}


$("#action1").on("click", function(){
    Table.listByBrand();
})


$("#action2").on("click", function(){
    Table.listByLocation();
})


$("#action3").on("click", function(){
    Table.listByLaunch();
})


$("#action4").on("click", function(){
    Table.listByPrice();
})


function tabla() {
    Table.setData(elementsList);
    Table.listAll();
};
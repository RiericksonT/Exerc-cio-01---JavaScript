function trafficLight(color) {
    switch (color) {
        case 'green':
            document.getElementById('img_traffic_light').src = 'img/green_light.png';
            break;
        case 'yellow':
            document.getElementById('img_traffic_light').src = 'img/yellow_light.png';
            break;
        case 'red':
            document.getElementById('img_traffic_light').src = 'img/red_light.png';
            break;
        case undefined:
            document.getElementById('img_traffic_light').src = 'img/all_off_light.png';
            break;
    }
}

function toFahrenheit() {
    let celsius = document.getElementById('inputCelcius').value;
    let fahrenheit = celsius * 1.8 + 32;
    let fahrenheitResult = document.getElementById('inputFahrenheit');
    fahrenheitResult.value = fahrenheit.toFixed(2);
}

function toCelcius() {
    let fahrenheit = document.getElementById('inputFahrenheit').value;
    let celcius = (fahrenheit - 32) / 1.8;
    let celciusResult = document.getElementById('inputCelcius');
    celciusResult.value = celcius.toFixed(2);
}

function imc() {
    //imc calculator
    let peso = document.getElementById('inputPeso').value;
    let altura = document.getElementById('inputAltura').value;
    let imcCalculo= peso / (altura * altura);
    let imcResult = document.getElementById('inputIMC');
    imcResult.value = imcCalculo.toFixed(2);

    //style imc result
    switch (true) {
        case (imcCalculo < 18.5):
            document.getElementById('inputIMC').style.backgroundColor = '#F8CA2E';
            imcResult.style.fontSize = '14px';
            imcResult.style.fontFamily = 'Arial';
            imcResult.style.fontWeight = 'bold';
            imcResult.style.color = 'black';
            break;
        case (imcCalculo >= 18.5 && imcCalculo < 25):
            document.getElementById('inputIMC').style.backgroundColor = '#4CAF50';
            imcResult.style.fontSize = '14px';
            imcResult.style.fontFamily = 'Arial';
            imcResult.style.fontWeight = 'bold';
            imcResult.style.color = 'black';
            break;
        case (imcCalculo >= 25 && imcCalculo < 30):
            document.getElementById('inputIMC').style.backgroundColor = '#FFC107';
            imcResult.style.fontSize = '14px';
            imcResult.style.fontFamily = 'Arial';
            imcResult.style.fontWeight = 'bold';
            imcResult.style.color = 'black';
            break;
        case (imcCalculo >= 30 && imcCalculo < 35):
            document.getElementById('inputIMC').style.backgroundColor = '#C75413';
            imcResult.style.fontSize = '14px';
            imcResult.style.fontFamily = 'Arial';
            imcResult.style.fontWeight = 'bold';
            imcResult.style.color = 'white';
            break;
        case (imcCalculo >= 40):
            document.getElementById('inputIMC').style.backgroundColor = '#D41314';
            imcResult.style.fontSize = '14px';
            imcResult.style.fontFamily = 'Arial';
            imcResult.style.fontWeight = 'bold';
            imcResult.style.color = 'white';
            break;
    }

}

function tabelaCarros(carros) {

    //delete header and body if exists
    let table = document.getElementById('tableCars');
    let header1 = table.getElementsByTagName('thead')[0];
    let body1 = table.getElementsByTagName('tbody')[0];
    if ((header1 != null) && (body1 != null)) {
        table.removeChild(header1);
        table.removeChild(body1);
    }

    //create table header
    let header = table.createTHead();
    let row = header.insertRow();
    let headerBrand = row.insertCell();
    let headerModel = row.insertCell();
    let headerPlate = row.insertCell();
    let headerPrice = row.insertCell();
    headerBrand.innerHTML = 'Marca';
    headerModel.innerHTML = 'Modelo';
    headerPlate.innerHTML = 'Placa do Carro';
    headerPrice.innerHTML = 'Pre??o';

    //create table body
    let body = table.createTBody();
    for (const element of carros) {
        let row2 = body.insertRow();
        let name = row2.insertCell();
        let model = row2.insertCell();
        let plate = row2.insertCell();
        let price = row2.insertCell();
        name.innerHTML = element.marca;
        model.innerHTML = element.modelo;
        plate.innerHTML = element.emplacamentos;
        price.innerHTML = element.preco;
    }

    //style table
    let tableStyle = document.getElementById('tableCars');
    tableStyle.style.border = '1px solid black';
    tableStyle.style.borderCollapse = 'collapse';
    tableStyle.style.width = '70%';
    tableStyle.style.margin = 'auto';
    tableStyle.style.textAlign = 'center';
    tableStyle.style.fontSize = '14px';
    tableStyle.style.fontFamily = 'Arial';

    //style header
    let headerStyle = document.getElementById('tableCars').getElementsByTagName('thead')[0];
    headerStyle.style.backgroundColor = '#4CAF50';
    headerStyle.style.color = 'white';
    headerStyle.style.fontSize = '16px';
    headerStyle.style.fontFamily = 'Arial';
    headerStyle.style.fontWeight = 'bold';
}

function tabelaCarrosMaisEmplacados(carros) {

    //delete header and body if exists
    let table = document.getElementById('tableCars');
    let header1 = table.getElementsByTagName('thead')[0];
    let body1 = table.getElementsByTagName('tbody')[0];
    if ((header1 != null) && (body1 != null)) {
        table.removeChild(header1);
        table.removeChild(body1);
    }

    //create table header
    let header = table.createTHead();
    let row = header.insertRow();
    let headerBrand = row.insertCell();
    let headerModel = row.insertCell();
    let headerPlate = row.insertCell();
    let headerPrice = row.insertCell();
    headerBrand.innerHTML = 'Marca';
    headerModel.innerHTML = 'Modelo';
    headerPlate.innerHTML = 'Placa do Carro';
    headerPrice.innerHTML = 'Pre??o';

    //create table body with cars on array ordered by plate
    let body = table.createTBody();
    let orderedCarros = carros.sort(function (a, b) {
        if (a.emplacamentos > b.emplacamentos) {
            return -1;
        };
    });
    for (const element of orderedCarros) {
        let row2 = body.insertRow();
        let name = row2.insertCell();
        let model = row2.insertCell();
        let plate = row2.insertCell();
        let price = row2.insertCell();
        name.innerHTML = element.marca;
        model.innerHTML = element.modelo;
        plate.innerHTML = element.emplacamentos;
        price.innerHTML = element.preco;
    }

    //style table
    let tableStyle = document.getElementById('tableCars');
    tableStyle.style.border = '1px solid black';
    tableStyle.style.borderCollapse = 'collapse';
    tableStyle.style.width = '70%';
    tableStyle.style.margin = 'auto';
    tableStyle.style.textAlign = 'center';
    tableStyle.style.fontSize = '14px';
    tableStyle.style.fontFamily = 'Arial';

    //style header
    let headerStyle = document.getElementById('tableCars').getElementsByTagName('thead')[0];
    headerStyle.style.backgroundColor = '#4CAF50';
    headerStyle.style.color = 'white';
    headerStyle.style.fontSize = '16px';
    headerStyle.style.fontFamily = 'Arial';
    headerStyle.style.fontWeight = 'bold';
}

function tabelaCarrosIpva(carros) {

    //delete header and body if exists
    let table = document.getElementById('tableCars');
    let header1 = table.getElementsByTagName('thead')[0];
    let body1 = table.getElementsByTagName('tbody')[0];
    if ((header1 != null) && (body1 != null)) {
        table.removeChild(header1);
        table.removeChild(body1);
    }

    //create table header with ipva cell
    let header = table.createTHead();
    let row = header.insertRow();
    let headerBrand = row.insertCell();
    let headerModel = row.insertCell();
    let headerPlate = row.insertCell();
    let headerPrice = row.insertCell();
    let headerIpva = row.insertCell();
    headerBrand.innerHTML = 'Marca';
    headerModel.innerHTML = 'Modelo';
    headerPlate.innerHTML = 'Placa do Carro';
    headerPrice.innerHTML = 'Pre??o';
    headerIpva.innerHTML = 'IPVA';

    //create table body with cars on array
    let body = table.createTBody();
    for (const element of carros) {
        let row2 = body.insertRow();
        let name = row2.insertCell();
        let model = row2.insertCell();
        let plate = row2.insertCell();
        let price = row2.insertCell();
        let ipva = row2.insertCell();
        name.innerHTML = element.marca;
        model.innerHTML = element.modelo;
        plate.innerHTML = element.emplacamentos;
        price.innerHTML = element.preco;

        let ipvaValue = element.preco * 0.02;

        ipva.innerHTML = ipvaValue.toFixed(2);
    }

    //style table
    let tableStyle = document.getElementById('tableCars');
    tableStyle.style.border = '1px solid black';
    tableStyle.style.borderCollapse = 'collapse';
    tableStyle.style.width = '70%';
    tableStyle.style.margin = 'auto';
    tableStyle.style.textAlign = 'center';
    tableStyle.style.fontSize = '14px';
    tableStyle.style.fontFamily = 'Arial';

    //style header
    let headerStyle = document.getElementById('tableCars').getElementsByTagName('thead')[0];
    headerStyle.style.backgroundColor = '#4CAF50';
    headerStyle.style.color = 'white';
    headerStyle.style.fontSize = '16px';
    headerStyle.style.fontFamily = 'Arial';
    headerStyle.style.fontWeight = 'bold';
}
window.onload = function () {

    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.elements.point.radius = 3;
    Chart.defaults.global.elements.line.borderColor = 'rgba(54, 162, 235,1)';
    Chart.defaults.global.elements.line.borderColor = 'rgba(54, 162, 235,1)';
    Chart.defaults.global.elements.point.backgroundColor = 'rgba(54, 162, 235,1)';
    Chart.defaults.global.elements.line.backgroundColor = 'rgba(215, 236, 251,0.5)';
    Chart.defaults.global.legend.display = false;
    // Chart.defaults.scale.gridLines.color//線標

    let config = {
        responsive: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false,//上面小標題
            labels: {
                fontSize: 15
            }
        },
        scale: {
            ticks: {
                beginAtZero: true,
                max: 10,
                min: 0,
                stepSize: 2
            },
            pointLabels: {
                fontSize: 11
            }
        }
    };

    let readCls = document.getElementsByClassName("chart")[0];//讀取class陣列，第幾個
    let idName = readCls.getAttribute('id');//找到class後才能尋找到ID
    let idNum = idName.match(/\d+/)[0];//id name後面接幾位數字都可以

    let ctx = document.getElementById(idName).getContext("2d");
    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: radarChartData[idNum],//陣列內排第幾個id
        options: config
    }); 

    // for (let i = 1; i <= 6; i++) {
    //     createChartOnCanvas("radarChart" + i, options);
    // }

}


let radarChartData = [
    {
        labels: ['User Experience',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [5, 6, 10, 10, 9, 7]//id0的資料ctv
        }]
    },
    {
        labels: ['User Experience',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [7, 10, 10, 10, 6, 6]//id1的資料lym
        }]
    },
    {
        labels: ['User Experience',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [6, 10, 10, 10, 8, 6]//id2的資料ilan
        }]
    },
    {
        labels: ['User Experience',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [2, 1, 8, 8, 7, 6]//id3的資料winbond
        }]
    },
    {
        labels: ['UI',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [8, 2, 8, 8, 7, 5]//id4的資料gsf
        }]
    },
    {
        labels: ['UI',
            'UX',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Extjs'],
        datasets: [{
            data: [8, 10, 6, 8, 8, 3, 10]//id5的資料tdcc
        }]
    },
    {
        labels: ['UI',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Acejs'],
        datasets: [{
            data: [7, 5, 8, 8, 4, 10]//id6的資料yuan
        }]
    },
    {
        labels: ['UX',
            'UI',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [8, 8, 8, 9, 10, 5]//id7的資料app-gsf
        }]
    },
    {
        labels: ['UX',
            'UI',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [6, 7, 6, 9, 10, 5]//id8的資料app-kgi
        }]
    },
    {
        labels: ['UI',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Acejs'],
        datasets: [{
            data: [7, 5, 8, 8, 4, 10]//id9的資料ffac
        }]
    },
    {
        labels: ['UX',
            'UI',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [0, 0, 10, 10, 5, 7]//id10的資料nowbet
        }]
    },
    {
        labels: ['UI',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Jquery/Js'],
        datasets: [{
            data: [10, 10, 2, 2, 4, 1]//id11的資料觀光局tav
        }]
    },
    {
        labels: ['UI',
            'Visual design',
            'HTML',
            'CSS',
            'Mobile Adaptation',
            'Extjs'],
        datasets: [{
            data: [1, 1, 8, 8, 1, 10]//id12的資料國防軍醫mnd
        }]
    },
    {
        labels: ['UI',
            'Visual design',
            'UX',
            'Zeplin',
            'Sketch'],
        datasets: [{
            data: [10, 10, 7, 10, 10]//id13的資料APP Queue
        }]
    }

    


];





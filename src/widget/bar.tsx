
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';

const option: (dataNya: any[], test: boolean) => EChartsOption = (dataNya: any[] | null, test: boolean) => {

    return {
        xAxis: {
            type: 'value',
            show: true
        },
        yAxis: {
            type: 'category',
            data: dataNya.map((v) => ({
                value: v.candidate1.name + "\n" + v.candidate2.name
            })),
            splitLine: {
                show: true
            }
        },
        series: [
            {
                data: dataNya.map((v) => ({
                    value: v.persen,
                    label: {
                        align: "right",
                        offset: [-50, 0],
                        backgroundColor: {
                            image: !test ? v.candidate1.img : "https://avenuesrecruiting.com/wp-content/uploads/2016/12/candidate-icon-300x300.png",
                        },
                        height: 50,
                        width: 50,
                        show: true,
                        position: 'right',
                        formatter: function (a: any) {
                            return "{b|}"
                        },
                        rich: {
                            b: {
                                // backgroundColor: 'https://cdn-icons-png.flaticon.com/512/5363/5363451.png',
                                verticalAlign: "bottom",
                                baseline: "bottom",
                                color: '#fff',
                                fontSize: 42,
                                fontWeight: "bold",
                                align: "right",
                            },
                        }
                    }
                })),
                type: 'bar',
                stack: "a",
                itemStyle: {
                    color: {
                        image: "https://static.vecteezy.com/system/resources/thumbnails/008/854/270/original/abstract-colorful-gradient-animation-background-free-video.jpg"
                    }
                }
            },
            {
                name: "apa",
                type: "bar",
                data: dataNya.map((v) => ({
                    name: "2",
                    value: 2,
                    label: {
                        offset: [-75, 0],
                        height: 50,
                        width: 50,
                        show: true,
                        position: 'right',
                        backgroundColor: {
                            image: !test ? v.candidate2.img : "https://avenuesrecruiting.com/wp-content/uploads/2016/12/candidate-icon-300x300.png",
                        },
                        formatter: function (a) {
                            return ""
                        }
                    }
                })),
                stack: "a",
                color: "white",
                itemStyle: {
                }, emphasis: {
                    disabled: true
                }
            },
            {
                name: "apa",
                type: "bar",
                data: dataNya.map((v) => ({
                    name: v.persen,
                    value: 15,
                    label: {
                        fontWeight: "bold",
                        show: true,
                        fontSize: 24,
                        color: "green",
                        formatter: function (a: any) {
                            return a.name + " %"
                        }
                    }
                })),
                stack: "a",
                color: "white",

                itemStyle: {
                    // opacity: 0
                }, emphasis: {
                    disabled: true
                }
            }
        ]
    }
}

export default function WidgetBarchart({ data, test }: { data?: any[] | null, test: boolean }) {
    if (test) data = sampleData()
    return <>
        <EChartsReact style={{
            height: 500
        }} option={option(data, test)} />
    </>;

}


function sampleData() {
    return [
        {
            "id": 14641,
            "date": "2023-09-19T00:00:00.000Z",
            "time": null,
            "createdAt": "2023-09-19T02:34:14.160Z",
            "updatedAt": "2023-09-19T02:34:14.160Z",
            "cityId": null,
            "persen": 49.89,
            "candidate1": {
                "id": 2,
                "name": "Ganjar Pranowo",
                "img": "/candidate/ganjar.png"
            },
            "candidate2": {
                "id": 1,
                "name": "Prabowo Subianto",
                "img": "/candidate/prabowo.png"
            }
        },
        {
            "id": 14631,
            "date": "2023-09-19T00:00:00.000Z",
            "time": null,
            "createdAt": "2023-09-19T02:34:14.160Z",
            "updatedAt": "2023-09-19T02:34:14.160Z",
            "cityId": null,
            "persen": 49.86,
            "candidate1": {
                "id": 1,
                "name": "Prabowo Subianto",
                "img": "/candidate/prabowo.png"
            },
            "candidate2": {
                "id": 2,
                "name": "Ganjar Pranowo",
                "img": "/candidate/ganjar.png"
            }
        },
        {
            "id": 14637,
            "date": "2023-09-19T00:00:00.000Z",
            "time": null,
            "createdAt": "2023-09-19T02:34:14.160Z",
            "updatedAt": "2023-09-19T02:34:14.160Z",
            "cityId": null,
            "persen": 46.28,
            "candidate1": {
                "id": 1,
                "name": "Prabowo Subianto",
                "img": "/candidate/prabowo.png"
            },
            "candidate2": {
                "id": 8,
                "name": "Mahfud MD",
                "img": "/candidate/mahfud.png"
            }
        },
        {
            "id": 14647,
            "date": "2023-09-19T00:00:00.000Z",
            "time": null,
            "createdAt": "2023-09-19T02:34:14.160Z",
            "updatedAt": "2023-09-19T02:34:14.160Z",
            "cityId": null,
            "persen": 43.65,
            "candidate1": {
                "id": 2,
                "name": "Ganjar Pranowo",
                "img": "/candidate/ganjar.png"
            },
            "candidate2": {
                "id": 8,
                "name": "Mahfud MD",
                "img": "/candidate/mahfud.png"
            }
        },
        {
            "id": 14646,
            "date": "2023-09-19T00:00:00.000Z",
            "time": null,
            "createdAt": "2023-09-19T02:34:14.160Z",
            "updatedAt": "2023-09-19T02:34:14.160Z",
            "cityId": null,
            "persen": 42.45,
            "candidate1": {
                "id": 2,
                "name": "Ganjar Pranowo",
                "img": "/candidate/ganjar.png"
            },
            "candidate2": {
                "id": 7,
                "name": "Erick Thohir",
                "img": "/candidate/eric.png"
            }
        }
    ]
}


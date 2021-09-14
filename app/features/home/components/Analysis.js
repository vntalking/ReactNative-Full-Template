import React, { useState, useEffect, memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppColors from '../../../config/colors';
import pixel from '../../../lib/pixel';
import moment from 'moment';
import LineChartWidget from '../../../components/Charts/LineChart';
import IOfficeWidget from '../../../components/Charts/BarChart';
import IGate from '../../../components/commons/IGate';
import IPortal from '../../../components/commons/IPortal';
import { ButtonGroup } from 'react-native-elements';

const Analysis = (props) => {
    const [loadingReveues, setLoadingReveues] = useState(true);
    const [loadingPay, setLoadingPay] = useState(true);
    const [loadingSendDocuments, setLoadingSendDocuments] = useState(true);
    const [loadingReceiveDocuments, setLoadingReceiveDocuments] = useState(true);

    const [dataReveues, setDataReveues] = useState({
        labels: ['-'],
        datasets: [
          {
            data: [0],
          },
        ],
        legend: ['-'], // optional
    });
    const [paysStatical, setPaysStatical] = useState({
        labels: ['-'],
        datasets: [
          {
            data: [0],
          },
        ],
        legend: ['-'], // optional
    });
    const monthLabels = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    const [sendDocuments, setSendDocuments] = useState({
        labels: ['-'],
        datasets: [
          {
            data: [0],
          },
        ],
    });
    const [receiveDocuments, setReceiveDocuments] = useState({
        labels: ['-'],
        datasets: [
          {
            data: [0],
          },
        ],
    });

    useEffect(() => {
        // onResume
        getDataReveues();
        getDataPays();
        getSendDocumentsAnalysis();
        getReceiveDocumentsAnalysis();
    }, []);

    /**
     * Lấy số liệu thống kê thu ngân sách
     */
    const getDataReveues = () => {
        const payload = {
          year: new Date().getFullYear(),
          type: 1,
        };
        props.getDataReveuesStatical(false, payload, response => {
            setLoadingReveues(false)
            if(response !== undefined  && response.length > 0){
                let dataRS = {};
                dataRS.labels =  monthLabels;
                dataRS.datasets = [
                    {
                        data: response[0].total_internal,
                        color: () => `#6b4683`,
                        strokeWidth: 2,
                    },
                    {
                        data: response[0].total_imx,
                        color: () => `#bb0a1e`, 
                        strokeWidth: 2,
                    },
                    {
                        data: response[0].total_budget,
                        color: () => `#323033`, 
                        strokeWidth: 2,
                    },
                ];
                dataRS.legends= [{color: '#6b4683', text: 'Thu nội địa'},
                                {color: '#bb0a1e', text: 'Thu hoạt động XNK'},
                                {color: '#323033', text: 'Thu quản lý \n qua ngân sách '}]
                setDataReveues(dataRS);
            }
        });
    };
    /**
     * Lấy số liệu thống kê chi ngân sách
     */
    const getDataPays = () => {
        const payload = {
          year: new Date().getFullYear(),
          type: 1,
        };
        props.getDataPaysStatical(false, payload, response => {
            setLoadingPay(false);
            if(response !== undefined && response.length > 0) {
                let dataPay = {};
                dataPay.labels = monthLabels;
                dataPay.datasets = [
                    {
                        data: response[0].total_localbudget,
                        color: () => `#6b4683`,
                        strokeWidth: 2, 
                    },
                    {
                        data: response[0].total_other,
                        color: () => `#bb0a1e`, 
                        strokeWidth: 2, 
                    },
                ];
                dataPay.legends = [{color: '#6b4683', text: 'Chi cân đối NS địa phương'},
                                    {color: '#bb0a1e', text: 'Chi CT MTQG,DA,nhiệm vụ khác'}];
                setPaysStatical(dataPay);
            }
        });
    };

    /**
     * Lấy số liệu thống kê lượng văn bản gửi đi
     */
    const getSendDocumentsAnalysis = () =>{
        var date = new Date();
        const payload = {
            from_date: moment(new Date(date.getFullYear(), date.getMonth(), 1)).format("DD/MM/YYYY"),
            to_date: moment(new Date(date.getFullYear(), date.getMonth()+1, 0)).format("DD/MM/YYYY")
        };
        props.getSendDocuments(false, payload, response => {
            setLoadingSendDocuments(false);
             console.log("setLoadingSendDocuments");
            console.log(response);
            if(response !== undefined  && response.length > 0){
                const data = {
                    labels: ["Đã phát hành", "Đã xem", "Chưa xem", "Quá hạn"],
                    datasets: [
                    {
                        data: [ response[0].DI_DA_PHAT_HANH, 
                                response[0].DI_DA_XEM, 
                                response[0].DI_CHUA_XEM, 
                                response[0].DI_QUA_HAN_XU_LY],
                        colors: [
                                    () => `#218732`,
                                    () => `#275bb2`,
                                    () => `#ff5000`,
                                    () => `#b10b0b`,
                                ]
                    }
                    ]
                };
                setSendDocuments(data);
            }
        })
    }

    /**
     * Lấy số liệu thống kê lượng văn bản nhận được
     */
    const getReceiveDocumentsAnalysis = () => {
        var date = new Date();
        const payload = {
            from_date: moment(new Date(date.getFullYear(), date.getMonth(), 1)).format("DD/MM/YYYY"),
            to_date: moment(new Date(date.getFullYear(), date.getMonth()+1, 0)).format("DD/MM/YYYY")
        };
        props.getReceiveDocuments(false, payload, response => {
            setLoadingReceiveDocuments(false)
            if(response !== undefined  && response.length > 0){
                const data = {
                    labels: ["Chưa xử lý", "Đã xử lý", "Đang xử lý", "Quá hạn"],
                    datasets: [
                    {
                        data: [ response[0].DEN_CHUA_XU_LY, 
                                response[0].DEN_DA_XU_LY, 
                                response[0].DEN_DANG_XU_LY, 
                                response[0].DEN_QUA_HAN_XU_LY],
                        colors: [
                                    () => `#218732`,
                                    () => `#275bb2`,
                                    () => `#ff5000`,
                                    () => `#b10b0b`,
                                ],
                    }
                    ]
                };
                setReceiveDocuments(data);
            }
        })
    }
    const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(0);
    const [selectedDocumentIndex, setSelectedDocumentIndex] = useState(0);
    const [selectedOtherIndex, setSelectedOtherIndex] = useState(0);

    const budgetTabs = ['Thu ngân sách', 'Chi ngân sách']
    const documentTabs = ['Văn bản đi', 'Văn bản đến']
    const otherTabs = ['Một cửa điện tử', 'Cổng thông tin']

    const updateBudgetWidgetIndex = selectedIndex => {  
        setSelectedBudgetIndex(selectedIndex)
    }
    const updateDocumentWidgetIndex = selectedIndex => {  
        setSelectedDocumentIndex(selectedIndex)
    }
    const updateOtherWidgetIndex = selectedIndex => {  
        setSelectedOtherIndex(selectedIndex)
    }
    return (
        <View style={styles.container}>
           <Text style={styles.textHeader}>Thống kê tổng hợp</Text>
           <View style={styles.card}>
                <View style={styles.center}>
                    <ButtonGroup      
                        onPress={updateBudgetWidgetIndex}      
                        selectedIndex={selectedBudgetIndex}      
                        buttons={budgetTabs}      
                        containerStyle={styles.tabsContainer}  
                        selectedButtonStyle={styles.tabsActivated}
                        selectedTextStyle={{fontSize: pixel(16)}}
                        textStyle={{fontSize: pixel(16)}}
                    />
           
                    {selectedBudgetIndex == 0 && (
                        <LineChartWidget loading={loadingReveues} data={dataReveues} extraconfig={{itemDimension: 100}}/>
                    )}

                    {selectedBudgetIndex == 1 && (
                        <LineChartWidget loading={loadingPay} data={paysStatical} extraconfig={{itemDimension: 150}}/>
                    )}
                </View>
           </View>
           <View style={styles.card}>
                <View style={styles.center}>
                    <ButtonGroup      
                        onPress={updateDocumentWidgetIndex}      
                        selectedIndex={selectedDocumentIndex}      
                        buttons={documentTabs}      
                        containerStyle={styles.tabsContainer}  
                        selectedButtonStyle={styles.tabsActivated}
                        selectedTextStyle={{fontSize: pixel(16)}}
                        textStyle={{fontSize: pixel(16)}}
                    />
                
                    {selectedDocumentIndex == 0 && (
                        <IOfficeWidget loading={loadingSendDocuments}  data={sendDocuments} extraconfig={{itemDimension: 150}}/>
                    )}

                    {selectedDocumentIndex == 1 && (
                        <IOfficeWidget loading={loadingReceiveDocuments} data={receiveDocuments} extraconfig={{itemDimension: 150}}/>
                    )}
                 </View>
            </View>
            <View style={styles.card}>
                <View style={styles.center}>
                    <ButtonGroup      
                        onPress={updateOtherWidgetIndex}      
                        selectedIndex={selectedOtherIndex}      
                        buttons={otherTabs}      
                        containerStyle={styles.tabsContainer}  
                        selectedButtonStyle={styles.tabsActivated}
                        selectedTextStyle={{fontSize: pixel(16)}}
                        textStyle={{fontSize: pixel(16)}}
                    />
                </View>
                    {selectedOtherIndex == 0 && (
                        <IGate {...props} title=""></IGate>
                    )}
                    {selectedOtherIndex == 1 && (
                        <IPortal {...props} title=""></IPortal>
                    )}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontWeight:'bold', 
        fontSize: pixel(20), 
        color: AppColors.black,
        marginBottom: pixel(10),
        marginTop: pixel(10)
    },
    container: {
        marginStart:pixel(10),
        marginEnd:pixel(10),
        marginBottom:pixel(10)
    },
    card: {
        borderWidth:0.5,
        borderRadius:5,
        //padding:8,
        marginBottom:8,
        backgroundColor: AppColors.white
    }
    ,
    center: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    tabsActivated: {
        backgroundColor: AppColors.danger,
    },
    tabsContainer: {
        height: pixel(35), 
        width: pixel(300),

    }
});

export default memo(Analysis);

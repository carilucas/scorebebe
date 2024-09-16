import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import RobotoLight from '../../fonts/Roboto/Roboto-Light.ttf';
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from '../../fonts/Roboto/Roboto-Bold.ttf';

Font.register({
    family: 'Roboto', fonts: [
        { src: RobotoLight },
        { src: RobotoRegular, fontWeight: 400 },
        { src: RobotoBold },
    ]
});

const styles = StyleSheet.create({
    h2: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#111827',
        fontFamily: 'Roboto',
        marginBottom: '20px'
    },
    h3: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#374151',
        fontFamily: 'Roboto'
    },
    h4: {
        fontSize: '13px',
        fontWeight: '400',
        color: '#374151',
        fontFamily: 'Roboto'
    },
})

const FormularioCinco = ({ formularioCinco }) => {
    return (
        <>
            {
                formularioCinco &&

                <View >
                    {
                        <Text style={styles.h2} >
                            Comorbilidades
                        </Text>
                    }
                    {
                        formularioCinco.asfixia &&
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.h4} >Trastornos relacionados con la asfixia. </Text>
                            <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={styles.h3}> Puntaje: </Text><Text style={styles.h4}>15</Text>
                            </View>
                        </View>
                    }
                    {
                        formularioCinco.malformaciones &&
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.h4} >Malformaciones. </Text>
                            <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={styles.h3}> Puntaje: </Text><Text style={styles.h4}>14</Text>
                            </View>
                        </View>
                    }
                    {
                        formularioCinco.prematuridad &&
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.h4} >Enfermedades relacionadas con la prematuridad. </Text>
                            <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={styles.h3}> Puntaje: </Text><Text style={styles.h4}>13</Text>
                            </View>
                        </View>
                    }
                    {
                        formularioCinco.infecciosas &&
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.h4} >Enfermedades infecciosas. </Text>
                            <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={styles.h3}> Puntaje: </Text><Text style={styles.h4}>9</Text>
                            </View>
                        </View>
                    }
                    {
                        formularioCinco.otros &&
                        <View >
                            <Text style={styles.h4} >Trastorno no relacionado con (Asfixia, Malformaciones, Enfermedades relacionadas con la prematuridad, Enfermedades infecciosas). </Text>
                            <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={styles.h3}>Puntaje: </Text><Text style={styles.h4}>11</Text>
                            </View>
                        </View>
                    }
                    {
                        formularioCinco.sinComorbilidades &&
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.h4} >Sin comorbilidades todavía. </Text>
                            <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={styles.h3}> Puntaje: </Text><Text style={styles.h4}>0</Text>
                            </View>
                        </View>
                    }
                </View>
            }
        </>
    )
}

export default FormularioCinco

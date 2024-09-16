import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import RobotoLight from '../../fonts/Roboto/Roboto-Light.ttf';
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from '../../fonts/Roboto/Roboto-Bold.ttf';
import { rangoCentil } from "../../helpers/rangoCentil";
import { parametrosCentil } from "../../data/parametrosCentil";

Font.register({
    family: 'Roboto', fonts: [
        { src: RobotoLight },
        { src: RobotoRegular, fontWeight: 400 },
        { src: RobotoBold },
    ]
});

const styles = StyleSheet.create({
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

const CentilPdf = ({formularioUno}) => {
    const dias = formularioUno.edadGestacional2 === '' ? 0 : formularioUno.edadGestacional2;
    const centil = rangoCentil(parametrosCentil, formularioUno?.edadGestacional1, dias, formularioUno?.peso, formularioUno?.sexo)
    return (
        <>
            {
                (centil === '< Percentil 5') ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{centil}</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>17</Text>
                        </View>
                    </View>
                :(centil === 'Percentil 5 al 95') ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{centil}</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>15</Text>
                        </View>
                    </View>
                :(centil === '> Percentil 95') ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{centil}</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>14</Text>
                        </View>
                    </View>
                :
                    <View></View>
            }
        </>
    )
}

export default CentilPdf

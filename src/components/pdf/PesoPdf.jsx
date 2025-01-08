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

const PesoPdf = ({ peso }) => {
    const pesoN = Number(peso)
    return (
        <>
            {
                (pesoN < 750) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{peso} gr.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>15</Text>
                        </View>
                    </View>
                :(pesoN >= 750 && pesoN < 1000) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{peso} gr.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>14</Text>
                        </View>
                    </View>
                :(pesoN >= 1000 && pesoN < 1500) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{peso} gr.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>13</Text>
                        </View>
                    </View>
                :(pesoN >= 1500 && pesoN < 2000) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{peso} gr.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>12</Text>
                        </View>
                    </View>
                :(pesoN >= 2000 && pesoN < 2500) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{peso} gr.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>16</Text>
                        </View>
                    </View>
                :(pesoN >= 2500 && pesoN < 4000) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{peso} gr.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>11</Text>
                        </View>
                    </View>
                :
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{peso} gr.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>13</Text>
                        </View>
                    </View>
            }
        </>
    )
}

export default PesoPdf;



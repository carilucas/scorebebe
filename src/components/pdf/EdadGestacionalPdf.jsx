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

const EdadGestacionalPdf = ({ edadGestacional1, edadGestacional2 }) => {
    const edadGestacionalN = Number(edadGestacional1)
    return (
        <>
            {
                (edadGestacionalN < 28) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{ `${edadGestacional1}.${edadGestacional2}` }.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>15</Text>
                        </View>
                    </View>
                :(edadGestacionalN >= 28 && edadGestacionalN < 32) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{ `${edadGestacional1}.${edadGestacional2}` }.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>13</Text>
                        </View>
                    </View>
                :(edadGestacionalN >= 32 && edadGestacionalN < 37) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{ `${edadGestacional1}.${edadGestacional2}` }.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>12</Text>
                        </View>
                    </View>
                :(edadGestacionalN >= 37 && edadGestacionalN < 39) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{ `${edadGestacional1}.${edadGestacional2}` }.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>11</Text>
                        </View>
                    </View>
                :(edadGestacionalN >= 39 && edadGestacionalN < 41) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{ `${edadGestacional1}.${edadGestacional2}` }.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>12</Text>
                        </View>
                    </View>
                :
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{ `${edadGestacional1}.${edadGestacional2}` }.</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>14</Text>
                        </View>
                    </View>
            }
        </>
    )
}

export default EdadGestacionalPdf;



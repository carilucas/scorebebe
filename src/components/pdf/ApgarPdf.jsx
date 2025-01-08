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

const ApgarPdf = ({apgar}) => {
    const apgarN = Number(apgar)
    return (
        <>
            {
                ( apgarN >= 0 && apgarN <= 3 ) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{apgar} </Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>35</Text>
                        </View>
                    </View>
                :( apgarN === 4 ) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{apgar} </Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>30</Text>
                        </View>
                    </View>
                :( apgarN === 5 ) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{apgar} </Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>25</Text>
                        </View>
                    </View>
                :( apgarN === 6 ) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{apgar} </Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>19</Text>
                        </View>
                    </View>
                :( apgarN === 7 ) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{apgar} </Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>18</Text>
                        </View>
                    </View>
                :( apgarN === 8 ) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{apgar} </Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>17</Text>
                        </View>
                    </View>
                :( apgarN === 9 ) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{apgar} </Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>16</Text>
                        </View>
                    </View>
                :(apgarN === 10 ) ?
                    <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end' }}>
                        <Text style={styles.h4}>{apgar} </Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection:'row', alignItems:'flex-end'}}>
                            <Text style={styles.h3}> Puntaje:</Text> <Text style={styles.h4}>15</Text>
                        </View>
                    </View>
                :
                    <View></View>
            }
        </>
    )
}

export default ApgarPdf

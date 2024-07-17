import { Circle, Document, Font, Image, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import logoScoreBlanco from '../../public/03-scorebebe_logo.png';
import logoPuceBlanco from '../../public/02-PUCE-Blanco-V.png';
import logoIspBlanco from '../../public/04-isp-horizontal_blanco.png';
import RobotoLight from '../fonts/Roboto/Roboto-Light.ttf';
import RobotoRegular from '../fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from '../fonts/Roboto/Roboto-Bold.ttf';


Font.register({
    family: 'Roboto', fonts: [
        { src: RobotoLight },
        { src: RobotoRegular, fontWeight: 400 },
        { src: RobotoBold },
    ]
});

const styles = StyleSheet.create({
    page:{
        paddingVertical:'20px'
    },
    header: {
        backgroundColor: '#60a5fa',
        paddingVertical: '10px',
        paddingHorizontal: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:'-20px'
    },
    h1: {
        fontSize: '19px',
        fontWeight: 'bold',
        color: '#111827',
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginBottom: '20px',
        hypens: 'none'
    },
    h2: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#111827',
        fontFamily: 'Roboto',
        marginBottom: '20px'
    },
    h3: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#374151',
        fontFamily: 'Roboto'
    },
    h4: {
        fontSize: '14px',
        fontWeight: '400',
        color: '#374151',
        fontFamily: 'Roboto'
    },
    p: {
        fontSize: '13px',
        fontWeight: '400',
        color: '#000000',
        fontFamily: 'Roboto',
        marginVertical: '5px'
    },
    infoItem: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom: '10px'
    },
    infoItemVert: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginBottom: '10px'
    },
    circle:{
        border:'4px solid #60a5fa',
        borderRadius:'50%',
        width:'100px',
        height:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

const RiesgoInminente = ({ formulario = {}, score = 0, rango = '',formularioDos={} }) => {

    const dias = formulario.edadGestacional2 === '' ? 0 : formulario.edadGestacional2;
    const showFormDosTitle = Object.values(formularioDos).find(value => value === true);


    return (
        <Document>
            <Page size={'A4'} style={styles.page}>
                <View style={styles.header}>
                    <View>
                        <Image src={logoScoreBlanco} style={{ width: '85px', height: '70px' }} />
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', gap: '30px' }}>
                        <Image src={logoPuceBlanco} style={{ width: '101px', height: '41px' }} />
                        <Image src={logoIspBlanco} style={{ width: '129px', height: '35px' }} />
                    </View>
                </View>
                <View style={{ marginTop: '10px', padding: '20px' }}>
                    <Text style={styles.h1}>Riesgo inminente para el neonato, requiere estabilización inmediata y/o transferencia urgente</Text>
                    <View style={{ border: '1px solid #e7e5e4', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '30px', padding: '20px', marginBottom:'10px' }}>
                        <View style={{ flex: '1' }}>
                            <Text style={styles.h2}>Datos del Neonato</Text>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Apellido Materno: </Text><Text style={styles.h4}>{formulario?.apellidoMaterno}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Sexo: </Text><Text style={styles.h4}>{formulario?.sexo}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Peso: </Text><Text style={styles.h4}>{formulario?.peso} gr.</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Edad gestacional: </Text><Text style={styles.h4}>{formulario?.edadGestacional1}.{dias}</Text>
                            </View>
                            <View style={styles.infoItemVert}>
                                <Text style={styles.h3}>Fecha y hora de  Nacimiento: </Text><Text style={styles.h4}>{formulario?.fechaNacimiento} {formulario.horaNacimiento}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Apgar: </Text><Text style={styles.h4}>{formulario?.apgar}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Tipo de parto: </Text><Text style={styles.h4}>{formulario?.tipoParto}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Percentil: </Text><Text style={styles.h4}>{rango}</Text>
                            </View>

                        </View>
                        <View style={{ flex: '1' }}>
                            <Text style={styles.h2} >Score del Neonato</Text>
                            <View style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <View style={ styles.circle } >
                                    <Text style={{ color:'#60a5fa', fontSize:'40px', fontWeight:'bold' }}>{score}</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{ marginTop: '20px' }}>
                        {
                            showFormDosTitle &&
                            <Text style={styles.h2} >
                                Factores de riesgo inminente para el neonato que requieren estabilización inmdiata y/o transferencia urgente:
                            </Text>
                        }
                        {
                            formularioDos.respiracion &&
                            <Text style={styles.h4} >
                                El niño respira débilmente o tiene dificultad respiratoria severa.
                            </Text>
                        }
                        {
                            (formularioDos.saturacion || formularioDos.alteracionRespiratoria || formularioDos.alteracionRectal) &&
                            <Text style={styles.h3} >
                                Porcentaje de saturación
                            </Text>
                        }
                        {
                            formularioDos.saturacion &&
                            <Text style={styles.h4} >
                                Menor a 92%
                            </Text>
                        }
                        {
                            formularioDos.alteracionRespiratoria &&
                            <Text style={styles.h4} >
                                Tiene alguna alteración de su frecuencia respiratoria (&lt; 40 o &gt; 60 rpm)
                            </Text>
                        }
                        {
                            formularioDos.alteracionRectal &&
                            <Text style={styles.h4} >
                                Tiene alguna alteración de su temperatura rectal (&lt; 36.6 o &gt; 38 oC) o temperatura axilar (&lt; 36.6 o &gt; 37.5 oC)
                            </Text>
                        }
                        {
                            (formularioDos.convulsiones || formularioDos.icterico || formularioDos.hipoglucemia || formularioDos.succionDebil || formularioDos.hidrorrea || formularioDos.reanimacion || formularioDos.malformaciones || formularioDos.lesionesSeveras ) &&
                            <Text style={styles.h3} >
                                Se encuentra hipnótico
                            </Text>
                        }
                        {
                            formularioDos.convulsiones &&
                            <Text style={styles.h4} >
                                Presencia de convulsiones
                            </Text>
                        }
                        {
                            formularioDos.icterico &&
                            <Text style={styles.h4} >
                                Se encuentra ictérico antes de las 24 horas o después del cuarto día de vida
                            </Text>
                        }
                        {
                            formularioDos.hipoglucemia &&
                            <Text style={styles.h4} >
                                Hipoglucemia (&lt; 50 mg/dL)
                            </Text>
                        }
                        {
                            formularioDos.succionDebil &&
                            <Text style={styles.h4} >
                               Tiene succión débil
                            </Text>
                        }
                        {
                            formularioDos.hidrorrea &&
                            <Text style={styles.h4} >
                                Madre tuvo hidrorrea mayor a 18 horas
                            </Text>
                        }
                        {
                            formularioDos.reanimacion &&
                            <Text style={styles.h4} >
                                Fue necesario reanimación básica o avanzada
                            </Text>
                        }
                        {
                            formularioDos.malformaciones &&
                            <Text style={styles.h4} >
                                Malformaciones severas
                            </Text>
                        }
                        {
                            formularioDos.lesionesSeveras &&
                            <Text style={styles.h4} >
                                Lesiones severas debido al parto
                            </Text>
                        }
                    </View>
                    <Text style={styles.h3} >
                            Descripción del caso:
                        </Text>
                        <Text style={styles.p} >
                            Condición del neonato grave; gestione la transferencia y/o el ingreso a cuidados intensivos neonatales y proceda:
                        </Text>
                        <Text style={styles.p} >
                            1. Administre Oxígeno si tiene dificultad respiratoria, cianosis generalizada o posible aspiración meconial
                        </Text>
                        <Text style={styles.p} >
                            2. Si no existe contraindicación, iniciar lactancia en la primera media hora postparto
                        </Text>
                        <Text style={styles.p} >
                                3. Dar antibiótico apropiado en caso de: a) rotura de membranas de &gt; 18 horas, b) flujo genital de mal olor o c) prematurez
                        </Text>
                        <Text style={styles.p} >
                            4. De no disponer de tratamiento específico, se deberá activar la gestión de la transferencia, considerando el acróstico “R.E.F.I.E.R.A.” (ver las páginas 60 y 61 del AIEPI clínico <Link src="http://186.42.188.158:8090/guias/AIEPI%20CLINICO.%20CUADROS%20DE%20PROCEDIMIENTOS.pdf" style={{color:'#60a5fa'}}> Link </Link>) aplicar las normas de cuidado neonatal vigentes
                        </Text>
                </View>
            </Page>
        </Document>
    )
}

export default RiesgoInminente

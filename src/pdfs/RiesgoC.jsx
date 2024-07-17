import { Document, Font, Image, Page, StyleSheet, Text, View, Link } from "@react-pdf/renderer";
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
    page: {
        paddingVertical: '20px'
    },
    header: {
        backgroundColor: '#60a5fa',
        paddingVertical: '10px',
        paddingHorizontal: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '-20px'
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
    circle: {
        border: '4px solid #60a5fa',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const RiesgoC = ({ formularioUno = {}, formularioTres = {}, formularioCuatro = {}, formularioCinco = {}, formularioSeis = {}, score = 0, rango = '', }) => {

    const dias = formularioUno.edadGestacional2 === '' ? 0 : formularioUno.edadGestacional2;
    const showFormTresTitle = Object.values(formularioTres).find(value => value === true);
    const showFormCuatroTitle = Object.values(formularioCuatro).find(value => value === true);



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
                    <Text style={styles.h1}>Categoría C de riesgo y primer nivel o segundo nivel</Text>
                    <View style={{ border: '1px solid #e7e5e4', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '30px', padding: '20px' }}>
                        <View style={{ flex: '1' }}>
                            <Text style={styles.h2}>Datos del Neonato</Text>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Apellido Materno: </Text><Text style={styles.h4}>{formularioUno?.apellidoMaterno}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Sexo: </Text><Text style={styles.h4}>{formularioUno?.sexo}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Peso: </Text><Text style={styles.h4}>{formularioUno?.peso} gr.</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Edad gestacional: </Text><Text style={styles.h4}>{formularioUno?.edadGestacional1}.{dias}</Text>
                            </View>
                            <View style={styles.infoItemVert}>
                                <Text style={styles.h3}>Fecha y hora de  Nacimiento: </Text><Text style={styles.h4}>{formularioUno?.fechaNacimiento} {formularioUno.horaNacimiento}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Apgar: </Text><Text style={styles.h4}>{formularioUno?.apgar}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Tipo de parto: </Text><Text style={styles.h4}>{formularioUno?.tipoParto}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.h3}>Percentil: </Text><Text style={styles.h4}>{rango}</Text>
                            </View>

                        </View>
                        <View style={{ flex: '1' }}>
                            <Text style={styles.h2} >Score del Neonato</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.circle} >
                                    <Text style={{ color: '#60a5fa', fontSize: '40px', fontWeight: 'bold' }}>{score}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: '20px' }}>
                        {
                            showFormTresTitle &&
                            <Text style={styles.h2} >
                                Factores que podrían incrementar el riesgo:
                            </Text>
                        }
                        {
                            formularioTres.polihidramnios &&
                            <Text style={styles.h4} >
                                Madre tuvo polihidramnios
                            </Text>
                        }
                        {
                            formularioTres.diabetes &&
                            <Text style={styles.h4} >
                                Madre diabética
                            </Text>
                        }
                        {
                            formularioTres.hipertension &&
                            <Text style={styles.h4} >
                                Madre con trastornos hipertensivos
                            </Text>
                        }
                        {
                            formularioTres.fallece &&
                            <Text style={styles.h4} >
                                Madre fallece posterior al parto
                            </Text>
                        }
                        {
                            formularioTres.ivu &&
                            <Text style={styles.h4} >
                                Madre tuvo IVU en el embarazo
                            </Text>
                        }
                        {
                            formularioTres.streptococus &&
                            <Text style={styles.h4} >
                                Madre tuvo cultivo positivo para Streptococus
                            </Text>
                        }
                        {
                            (formularioTres.menor15 || formularioTres.mayor40) &&
                            <Text style={styles.h3} >
                                Edad de la madre
                            </Text>
                        }
                        {
                            formularioTres.menor15 &&
                            <Text style={styles.h4} >
                                Menor de 15 años
                            </Text>
                        }
                        {
                            formularioTres.mayor40 &&
                            <Text style={styles.h4} >
                                Mayor de 40 años
                            </Text>
                        }
                        {
                            (formularioTres.alcohol || formularioTres.cocaina) &&
                            <Text style={styles.h3} >
                                Madre con adicciones
                            </Text>
                        }
                        {
                            formularioTres.alcohol &&
                            <Text style={styles.h4} >
                                Alcohol
                            </Text>
                        }
                        {
                            formularioTres.cocaina &&
                            <Text style={styles.h4} >
                                Cocaína
                            </Text>
                        }
                        {
                            formularioTres.ninoMasculino &&
                            <Text style={styles.h4} >
                                Niño de sexo masculino
                            </Text>
                        }
                        {
                            formularioTres.riesgoSocial &&
                            <Text style={styles.h4} >
                                Madre con riesgo social (analfabetismo, adicciones, violencia doméstica, vivienda muy lejana a un establecimiento de salud, etc.)
                            </Text>
                        }
                        {
                            (formularioTres.vih || formularioTres.sifilis || formularioTres.tuberculosis || formularioTres.discapacidades) &&
                            <Text style={styles.h3} >
                                Madre presenta
                            </Text>
                        }
                        {
                            formularioTres.vih &&
                            <Text style={styles.h4} >
                                VIH
                            </Text>
                        }
                        {
                            formularioTres.sifilis &&
                            <Text style={styles.h4} >
                                Sífilis
                            </Text>
                        }
                        {
                            formularioTres.tuberculosis &&
                            <Text style={styles.h4} >
                                Tuberculosis
                            </Text>
                        }
                        {
                            formularioTres.discapacidades &&
                            <Text style={styles.h4} >
                                Discapacidades
                            </Text>
                        }
                        {
                            formularioTres.partoDomicilio &&
                            <Text style={styles.h4} >
                                Parto en domicilio o por personal no entrenado
                            </Text>
                        }
                        {
                            formularioTres.controlPrenatal &&
                            <Text style={styles.h4} >
                                Ningún control prenatal
                            </Text>
                        }
                        {
                            formularioTres.embarazoMultiple &&
                            <Text style={styles.h4} >
                                Embarazo múltiple
                            </Text>
                        }
                    </View>
                    <View style={{ marginTop: '20px' }}>
                        {
                            showFormCuatroTitle &&
                            <Text style={styles.h2} >
                                Factores que podrían reducir el riesgo del neonato:
                            </Text>
                        }
                        {
                            formularioCuatro.maduracionPulmonar &&
                            <Text style={styles.h4} >
                                Es prematuro y recibió dosis completa de maduración pulmonar
                            </Text>
                        }
                        {
                            formularioCuatro.uteroinhibicion &&
                            <Text style={styles.h4} >
                                Es prematuro y recibió tratamiento de uteroinhibición hasta alcanzar maduración pulmonar
                            </Text>
                        }
                    </View>
                    {
                        formularioCinco &&

                        <View style={{ marginTop: '20px' }}>
                            {
                                !formularioCinco.sinComorbilidades &&
                                <Text style={styles.h2} >
                                    Comorbilidades
                                </Text>
                            }
                            {
                                formularioCinco.asfixia &&
                                <Text style={styles.h4} >
                                    Trastornos relacionados con la asfixia
                                </Text>
                            }
                            {
                                formularioCinco.malformaciones &&
                                <Text style={styles.h4} >
                                    Malformaciones
                                </Text>
                            }
                            {
                                formularioCinco.prematuridad &&
                                <Text style={styles.h4} >
                                    Enfermedades relacionadas con la prematuridad
                                </Text>
                            }
                            {
                                formularioCinco.infecciosas &&
                                <Text style={styles.h4} >
                                    Enfermedades infecciosas
                                </Text>
                            }
                            {
                                formularioCinco.otros &&
                                <Text style={styles.h4} >
                                    Trastorno no relacionado con (Asfixia, Malformaciones, Enfermedades relacionadas con la prematuridad, Enfermedades infecciosas)
                                </Text>
                            }
                        </View>
                    }
                    {
                        formularioSeis &&

                        <View style={{ marginTop: '20px' }}>
                            {
                                !formularioSeis.sinComorbilidades &&
                                <Text style={styles.h2} >
                                    Comorbilidades
                                </Text>
                            }
                            {
                                formularioSeis.asfixia &&
                                <Text style={styles.h4} >
                                    Trastornos relacionados con la asfixia
                                </Text>
                            }
                            {
                                formularioSeis.malformaciones &&
                                <Text style={styles.h4} >
                                    Malformaciones
                                </Text>
                            }
                            {
                                formularioSeis.prematuridad &&
                                <Text style={styles.h4} >
                                    Enfermedades relacionadas con la prematuridad
                                </Text>
                            }
                            {
                                formularioSeis.infecciosas &&
                                <Text style={styles.h4} >
                                    Enfermedades infecciosas
                                </Text>
                            }
                            {
                                formularioSeis.otros &&
                                <Text style={styles.h4} >
                                    Trastorno no relacionado con (Asfixia, Malformaciones, Enfermedades relacionadas con la prematuridad, Enfermedades infecciosas)
                                </Text>
                            }
                        </View>
                    }
                    <View style={{ marginTop: '20px' }}>
                        <Text style={styles.h3} >
                            Descripción del caso:
                        </Text>
                        <Text style={styles.p} >
                            Neonato de apellido materno <Text style={{ fontWeight: 'bold', fontSize: '15px' }}>{formularioUno.apellidoMaterno}</Text>, es un neonato de Categoría de riesgo C (bajo riesgo): tiene más probabilidades de eventos adversos neonatales antes de los 15 días de vida, en comparación a los niños de categoría D (muy bajo riesgo).
                        </Text>
                        <Text style={styles.p} >
                            Como se encuentra en el primer nivel:
                        </Text>
                        <Text style={styles.p} >
                            1. Tome los signos vitales conforme la norma,.
                        </Text>
                        <Text style={styles.p} >
                            2. Mantenga al bebé junto a su madre,
                        </Text>
                        <Text style={styles.p} >
                            3. Aplique los cuidados rutinarios del recién nacido.
                        </Text>
                        <Text style={styles.p} >
                            Si el neonato está estable y ha cumplido, al menos, 48 horas de vida cuando el nacimiento fue por parto normal; o, 72 horas de vida cuando ha sido por cesárea, proceda a dar el alta de calidad conforme la normativa vigente, y previa evaluación de un médico familiar.
                        </Text>
                        <Text style={styles.p} >
                            Oriente a la madre en lactancia materna exclusiva, cuidados del recién nacido en el hogar; en caso de prematurez o peso bajo, orientar de los cuidados extra (ver las páginas 53, 54 y 55 del AIEPI Clínico <Link src="http://186.42.188.158:8090/guias/AIEPI%20CLINICO.%20CUADROS%20DE%20PROCEDIMIENTOS.pdf" style={{color:'#60a5fa'}}> Link </Link>); y control en no más de 3 días en consulta de Pediatría o Medicina Familiar, previa notificación al establecimiento de salud para atención preferencial.
                        </Text>
                        <Text style={styles.p} >
                            Si el neonato cumple con alguno de los “Factores que podrían incrementar el riesgo neonatal”, requiere una visita domiciliaria por parte de un médico, dentro de los 2 a 3 días de vida, o 24 a 48 horas del alta.
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default RiesgoC;

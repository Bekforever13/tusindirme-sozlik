import React from 'react'
import { BsShareFill } from 'react-icons/bs'
import styles from './About.module.scss'
import logo from 'src/assets/images/logo_about.svg'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
	return (
		<div className={styles.root} id='about'>
			<div className={styles.title}>Baǵdarlama haqqında</div>
			<div className={styles.about}>
				<div className={styles.text}>
					<div className={styles.about_title}>
						<div>Túsindirme sózlik </div>
						<span>
							<BsShareFill />
						</span>
					</div>
					<div className={styles.about_type}>Web sayt</div>
					<div className={styles.about_desc}>
						Bul platforma – 1982-1992-jılları kitap bolıp basılıp shıqqan
						“Qaraqalpaq tiliniń túsindirme sózligi”niń 4 tomlıǵı tiykarında
						islep shıǵılǵan. Bul baǵdarlamaǵa 4 tomlıqtaǵı sózler ózgerssiz
						kirgizilgen. Sonlıqtan, bunda sol dáwirge tiyisli bolǵan kóplegen
						sózler de ushırasıwı múmkin. Biraq, ótken dáwirge tiyisli ayırırm
						ideologiyalıq baǵdardaǵı sózlerdiń mánisin biliw de áhmiyetli.
						Házirgi waqıtta qaraqalpaq tilshileri tárepinen Túsindirme sózliktiń
						6 tomlıǵı tayarlanbaqta. Usı jańa zamanǵa say sózler menen
						tolıqtırılǵan usı kóp tomlıqtaǵı sózler bizlerdiń platformamızǵa
						kiritilip barıladı. Álbette, bul platformada ayırım kemshilikler
						bolıwı múmkin. aldaǵı waqıtlarda dúzetip baramız.
						<br />
						<br />
						<Link to='/'>Tusindirmesozlik.uz</Link> – sanlı baǵdarlama bolıp, bunda
						qaraqalpaq tiliniń altın ǵáziynesinen orın alǵan kóp mıńlaǵan
						sózlerdiń sinonimleri, mánisi, etimologiyası mısallar járdeminde
						beriledi. Siz bul platformada qálegen waqıtta hám qálegen orında
						paydalanıw imkaniyatına iye bolasız. Bizlerdiń tiykarǵı maqsetimiz –
						qaraqalpaq tilin internet global tarmaǵına qosıw arqalı
						rawajlandırıw. Jaqın keleshekte platformanı taǵı da jetilistirip,
						oǵan audiovariantlardı da qosıwdı rejelestirgenmiz. Eger de Ana
						tilimizdiń rawajlanıwına úles qosqıńız kelse, biziń platformamızdı
						qollap-quwatlawıńızdı soraymız! Platforma "Bookie" qaraqalpaq
						tilindegi audiokitaplar hám "KARSOFT-IT-SOLUTIONS" JSHJ tárepinen
						islep shıǵıldı. Bul joybar Qaraqalpaqstan Respublikası Ministrler
						Keńesi janındaǵı Qaraqalpaq tilin rawajlandırıw fondı tárepinen
						qollap-quwatlandı.
					</div>
				</div>
				<div className={styles.about_logo}>
					<img src={logo} alt='tusindirmesozlik logo' />
				</div>
			</div>
		</div>
	)
}

export { About }

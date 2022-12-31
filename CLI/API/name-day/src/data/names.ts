const names: {[key: string]: string | string[]} = {
  '1-01': 'Mečislav',
  '2-01': ['Karina', 'Karin', 'Karína'],
  '3-01': 'Radmila',
  '4-01': 'Diana',
  '5-01': ['Dalimil', 'Dalemil'],
  '6-01': ['Melichar', 'Baltazar', 'Kašpar'],
  '7-01': ['Wilhelmina', 'Vilma'],
  '8-01': 'Čestmír',
  '9-01': 'Vladan',
  '10-01': 'Břetislav',
  '11-01': 'Bohdana',
  '12-01': 'Pravoslav',
  '13-01': 'Edita',
  '14-01': 'Radovan',
  '15-01': 'Alice',
  '16-01': ['Česlav', 'Ctirad'],
  '17-01': 'Drahoslav',
  '18-01': 'Vladislav',
  '19-01': 'Doubravka',
  '20-01': 'Ilona',
  '21-01': 'Běla',
  '22-01': 'Slavomír',
  '23-01': ['Zdenko', 'Zdeněk'],
  '24-01': 'Milena',
  '25-01': 'Miloš',
  '26-01': 'Zora',
  '27-01': 'Ingrid',
  '28-01': 'Otýlie',
  '29-01': 'Zdislava',
  '30-01': 'Robin',
  '31-01': 'Marika',
  '1-02': 'Hynek',
  '2-02': 'Nela',
  '3-02': 'Blažej',
  '4-02': 'Jarmila',
  '5-02': 'Dobromila',
  '6-02': 'Vanda',
  '7-02': 'Veronika',
  '8-02': 'Milada',
  '9-02': 'Apolena',
  '10-02': 'Mojmír',
  '11-02': 'Božena',
  '12-02': 'Slavěna',
  '13-02': 'Věnceslav',
  '14-02': ['Valentin', 'Valentýna'],
  '15-02': 'Jiřina',
  '16-02': 'Ljuba',
  '17-02': 'Miloslava',
  '18-02': 'Gisela',
  '19-02': 'Patrik',
  '20-02': 'Oldřich',
  '21-02': 'Lenka',
  '22-02': 'Petr',
  '23-02': 'Svatopluk',
  '24-02': ['Matěj', 'Matyáš'],
  '25-02': ['Lilian', 'Liliana'],
  '26-02': 'Dorota',
  '27-02': 'Alexandr',
  '28-02': 'Lumír',
  '29-02': ['Rufin', 'Horymír'],
  '1-03': 'Bedřich',
  '2-03': ['Anežka', 'Ines', 'Agnes'],
  '3-03': 'Kamil',
  '4-03': 'Stela',
  '5-03': 'Kazimír',
  '6-03': ['Mirek', 'Miroslav'],
  '7-03': 'Tomáš',
  '8-03': 'Gabriela',
  '9-03': ['Františka', 'Francesca'],
  '10-03': 'Viktorie',
  '11-03': ['Angelina', 'Andělína', 'Anděla'],
  '12-03': ['Gregor', 'Řehoř'],
  '13-03': ['Rosita', 'Růžena', 'Rozálie'],
  '14-03': ['Matylda', 'Rút', 'Rut'],
  '15-03': 'Ida',
  '16-03': ['Elena', 'Herbert'],
  '17-03': 'Vlastimil',
  '18-03': ['Eduard', 'Edvard'],
  '19-03': 'Josef',
  '20-03': 'Světlana',
  '21-03': ['Radomil', 'Radek'],
  '22-03': 'Leona',
  '23-03': 'Ivona',
  '24-03': 'Gabriel',
  '25-03': 'Marián',
  '26-03': 'Emanuel',
  '27-03': 'Dita',
  '28-03': ['Sonia', 'Soňa'],
  '29-03': 'Taťána',
  '30-03': 'Arnošt',
  '31-03': 'Kvido',
  '1-04': 'Hugo',
  '2-04': 'Erika',
  '3-04': 'Richard',
  '4-04': 'Ivana',
  '5-04': ['Miroslava', 'Mirka'],
  '6-04': 'Vendula',
  '7-04': 'Hermína',
  '8-04': ['Ema', 'Emma'],
  '9-04': ['Dušan', 'Dušana'],
  '10-04': 'Daria',
  '11-04': ['Isabel', 'Izabela'],
  '12-04': 'Julian',
  '13-04': 'Aleš',
  '14-04': 'Vincent',
  '15-04': 'Anastázie',
  '16-04': 'Irena',
  '17-04': 'Rudolf',
  '18-04': 'Valérie',
  '19-04': 'Rostislava',
  '20-04': 'Marcela',
  '21-04': 'Alexandra',
  '22-04': 'Evženie',
  '23-04': 'Vojtěch',
  '24-04': 'Jiří',
  '25-04': 'Marek',
  '26-04': 'Ota',
  '27-04': 'Jaroslav',
  '28-04': 'Vlastislav',
  '29-04': 'Robert',
  '30-04': 'Blahoslav',
  '2-05': 'Zikmund',
  '3-05': 'Alex',
  '4-05': 'Květoslav',
  '5-05': 'Klaudie',
  '6-05': 'Radoslav',
  '7-05': 'Stanislav',
  '9-05': 'Ctibor',
  '10-05': 'Blažena',
  '11-05': 'Svatava',
  '12-05': 'Pankrác',
  '13-05': 'Servác',
  '14-05': 'Bonifác',
  '15-05': 'Žofie',
  '16-05': 'Přemysl',
  '17-05': 'Aneta',
  '18-05': 'Nataša',
  '19-05': 'Ivo',
  '20-05': 'Zbyšek',
  '21-05': 'Monika',
  '22-05': 'Emil',
  '23-05': 'Vladimír',
  '24-05': 'Jana',
  '25-05': 'Viola',
  '26-05': 'Filip',
  '27-05': 'Valdemar',
  '28-05': 'Vilém',
  '29-05': 'Maxmilián',
  '30-05': 'Ferdinand',
  '31-05': 'Kamila',
  '1-06': 'Laura',
  '2-06': 'Jarmil',
  '3-06': 'Tamara',
  '4-06': 'Dalibor',
  '5-06': 'Dobroslav',
  '6-06': 'Norbert',
  '7-06': 'Iveta',
  '8-06': 'Medard',
  '9-06': 'Stanislava',
  '10-06': 'Otta',
  '11-06': 'Bruno',
  '13-06': 'Antonín',
  '14-06': 'Roland',
  '15-06': 'Vít',
  '16-06': 'Zbyněk',
  '17-06': 'Adolf',
  '18-06': 'Milan',
  '19-06': 'Leoš',
  '20-06': 'Květa',
  '21-06': 'Alois',
  '22-06': 'Pavla',
  '23-06': 'Zdena',
  '24-06': 'Jan',
  '25-06': 'Ivan',
  '26-06': 'Adriana',
  '27-06': 'Ladislav',
  '28-06': 'Lubomír',
  '29-06': ['Pavel', 'Petr'],
  '30-06': 'Šárka',
  '1-07': 'Jaroslava',
  '2-07': 'Patricie',
  '3-07': 'Radomír',
  '4-07': 'Prokop',
  '5-07': ['Metoděj', 'Cyril'],
  '7-07': 'Bohuslava',
  '8-07': 'Nora',
  '9-07': 'Drahoslava',
  '10-07': ['Libuše', 'Amálie'],
  '11-07': 'Olga',
  '12-07': 'Bořek',
  '13-07': ['Margit', 'Markéta', 'Margareta'],
  '14-07': ['Karolína', 'Karla'],
  '15-07': 'Jindřich',
  '16-07': 'Luboš',
  '17-07': 'Martina',
  '18-07': 'Drahomíra',
  '19-07': 'Čeněk',
  '20-07': 'Ilja',
  '21-07': 'Vítězslav',
  '22-07': 'Magdaléna',
  '23-07': 'Libor',
  '24-07': 'Kristýna',
  '25-07': 'Jakub',
  '26-07': 'Anna',
  '27-07': 'Věroslav',
  '28-07': 'Viktor',
  '29-07': 'Marta',
  '30-07': 'Bořivoj',
  '31-07': 'Ignác',
  '1-08': 'Oskar',
  '2-08': 'Gustav',
  '3-08': 'Miluše',
  '4-08': 'Dominik',
  '5-08': 'Kristián',
  '6-08': 'Oldřiška',
  '7-08': 'Lada',
  '8-08': 'Soběslav',
  '9-08': 'Roman',
  '10-08': 'Vavřinec',
  '11-08': 'Zuzana',
  '12-08': 'Klára',
  '13-08': 'Alena',
  '14-08': 'Alan',
  '15-08': 'Hana',
  '16-08': 'Jáchym',
  '17-08': 'Petra',
  '18-08': 'Helena',
  '19-08': 'Ludvík',
  '20-08': 'Bernard',
  '21-08': 'Johana',
  '22-08': 'Bohuslav',
  '23-08': 'Sandra',
  '24-08': 'Bartoloměj',
  '25-08': 'Radimír',
  '26-08': 'Luděk',
  '27-08': 'Otakar',
  '28-08': 'Augustýn',
  '29-08': 'Evelína',
  '30-08': 'Vladěna',
  '31-08': 'Pavlína',
  '1-09': ['Samuel', 'Linda'],
  '2-09': 'Adéla',
  '3-09': 'Bronislav',
  '4-09': 'Jindřiška',
  '5-09': 'Boris',
  '6-09': 'Boleslav',
  '7-09': 'Regína',
  '8-09': 'Mariana',
  '9-09': 'Daniela',
  '10-09': 'Irma',
  '11-09': ['Denisa', 'Denis'],
  '12-09': 'Marie',
  '13-09': 'Lubor',
  '14-09': 'Radka',
  '15-09': 'Jolana',
  '16-09': 'Ludmila',
  '17-09': 'Naděžda',
  '18-09': 'Kryštof',
  '19-09': 'Zita',
  '20-09': 'Oleg',
  '21-09': 'Matouš',
  '22-09': 'Darina',
  '23-09': 'Berta',
  '24-09': 'Jaromír',
  '25-09': 'Zlata',
  '26-09': 'Andrea',
  '27-09': 'Jonáš',
  '28-09': 'Václav',
  '29-09': 'Michal',
  '30-09': 'Jeronym',
  '1-10': 'Igor',
  '2-10': ['Oliver', 'Olívie'],
  '3-10': 'Bohumil',
  '4-10': 'František',
  '5-10': 'Eliška',
  '6-10': 'Hanuš',
  '7-10': 'Justýna',
  '8-10': 'Věra',
  '9-10': ['Sára', 'Štefan'],
  '10-10': 'Marína',
  '11-10': 'Andrej',
  '12-10': 'Marcel',
  '13-10': 'Renata',
  '14-10': 'Agáta',
  '15-10': 'Tereza',
  '16-10': 'Havel',
  '17-10': 'Hedvika',
  '18-10': 'Lukáš',
  '19-10': 'Michala',
  '20-10': 'Vendelín',
  '21-10': 'Brigita',
  '22-10': 'Sabina',
  '23-10': 'Theodor',
  '24-10': 'Nina',
  '25-10': 'Beáta',
  '26-10': 'Erik',
  '27-10': 'Šarlota',
  '29-10': 'Silvie',
  '30-10': 'Tadeáš',
  '31-10': 'Štepánka',
  '1-11': 'Felix',
  '3-11': 'Hubert',
  '4-11': 'Karel',
  '5-11': 'Miriam',
  '6-11': 'Liběna',
  '7-11': 'Saskie',
  '8-11': 'Bohumír',
  '9-11': 'Bohdan',
  '10-11': 'Evžen',
  '11-11': 'Martin',
  '12-11': 'Benedikt',
  '13-11': 'Tibor',
  '14-11': 'Sáva',
  '15-11': 'Leopold',
  '16-11': 'Otomar',
  '17-11': 'Mahulena',
  '18-11': 'Romana',
  '19-11': 'Alžběta',
  '20-11': 'Nikola',
  '21-11': 'Albert',
  '22-11': 'Cecílie',
  '23-11': 'Klement',
  '24-11': 'Emílie',
  '25-11': 'Kateřina',
  '26-11': 'Artur',
  '27-11': 'Xenie',
  '28-11': 'René',
  '29-11': 'Zina',
  '30-11': 'Ondřej',
  '1-12': 'Iva',
  '2-12': 'Blanka',
  '3-12': 'Svatoslav',
  '4-12': 'Barbora',
  '5-2': 'Jitka',
  '6-2': 'Mikuláš',
  '7-2': 'Benjamin',
  '8-2': 'Květoslava',
  '9-2': 'Vratislav',
  '10-12': 'Julie',
  '11-12': 'Dana',
  '12-12': 'Simona',
  '13-12': 'Lucie',
  '14-12': 'Lydie',
  '15-12': 'Radana',
  '16-12': 'Albína',
  '17-12': 'Daniel',
  '18-12': 'Miloslav',
  '19-12': 'Ester',
  '20-12': 'Dagmar',
  '21-12': 'Natálie',
  '22-12': 'Šimon',
  '23-12': 'Vlasta',
  '24-12': ['Adam', 'Eva'],
  '26-12': 'Štěpán',
  '27-12': 'Žaneta',
  '28-12': 'Bohumila',
  '29-12': 'Judita',
  '30-12': 'David',
  '31-12': 'Sylvestr',
}

export default names;
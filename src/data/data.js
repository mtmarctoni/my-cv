import {
    SolidityIcon,
    JavascriptIcon,
    SqlIcon,
    VbaIcon,
    TypescriptIcon,
    PythonIcon,
    ReactIcon,
    HtmlIcon,
    CssIcon,
    NodejsIcon,
    ExpressIcon,
    MongodbIcon,
    VueIcon,
    TailwindIcon,
    ExcelIcon,
    VscodeIcon,
    GitIcon,
    PowerbiIcon,
    PowerappsIcon,
    PowerautomateIcon,
    HardhatIcon,
} from '../composables/icons'
 
import {SpanishIcon, EnglishIcon, GermanIcon, CatalanIcon } from '../composables/icons'


export const data = {
    cvPdfLink: '/my-cv/transcripts/CV_MarcToniMas.pdf',
    experience: {
        images: [
            {
                img: '/my-cv/icons/logo-efiwatt.svg',
                imgD: '/my-cv/icons/logo-efiwatt-dark.svg',
            },
            {
                img: '/my-cv/icons/logo-efiwatt.svg',
                imgD: '/my-cv/icons/logo-efiwatt-dark.svg',
            },
            {
                img: '/my-cv/icons/software-icon.svg',
                imgD: '/my-cv/icons/software-icon.svg',
            },
            {
                img: '/my-cv/icons/faviconblue-icmab.svg',
                imgD: '/my-cv/icons/logo-icmab-dark.svg',
            },
            {
                img: 'https://www.icfo.eu/wp-content/uploads/2019/05/ICFO.svg',
                imgD: 'https://www.icfo.eu/wp-content/themes/Divi-child/img/ICFO_blanc.svg',
            },
        ],
    },
    skills: {
        skillCategories: [
            {
                //name: 'Languages',
                skills: [
                    { name: 'Javascript', icon: JavascriptIcon },
                    { name: 'Solidity', icon: SolidityIcon },
                    { name: 'SQL', icon: SqlIcon },
                    { name: 'VBA', icon: VbaIcon },
                ],
                basicKnowledge: [
                    { name: 'TypeScript', icon: TypescriptIcon },
                    { name: 'Python', icon: PythonIcon },
                ]
            },
            {
                //name: 'Desarrollo Web',
                skills: [
                  { name: 'React', icon: ReactIcon },
                  { name: 'HTML', icon: HtmlIcon },
                  { name: 'CSS', icon: CssIcon },
                ],
                basicKnowledge: [
                  { name: 'Node', icon: NodejsIcon },
                  { name: 'Express', icon: ExpressIcon },
                  { name: 'MongoDB', icon: MongodbIcon },
                  { name: 'Vue', icon: VueIcon },
                  { name: 'Tailwind', icon: TailwindIcon },
                  { name: 'Next', icon: '' },
                ]
              },
              {
                //name: 'Otros',
                skills: [
                  { name: 'Excel', icon: ExcelIcon },
                  { name: 'VS Code', icon: VscodeIcon },
                  { name: 'Git', icon: GitIcon },
                  { name: 'Power BI', icon: PowerbiIcon },
                  { name: 'Power Apps', icon: PowerappsIcon },
                  { name: 'Power Automate', icon: PowerautomateIcon },
                ],
                basicKnowledge: [
                  { name: 'DAX', icon: '' },
                  { name: 'Office Scripts', icon: '' },
                  { name: 'Power Query', icon: '' },
                  { name: 'Power Pivot', icon: '' },
                  { name: 'web3', icon: '' },
                  { name: 'Hardhat', icon: HardhatIcon },
                ]
              },
        ],
        otherSkills: [
        ]
    },
    others: {
        flags: [
            SpanishIcon,
            CatalanIcon,
            EnglishIcon,
            GermanIcon,
        ],
      }
}


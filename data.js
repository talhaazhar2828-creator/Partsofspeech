const POS = [
{ id:'noun', title:'Noun', subtitle:'Naming words', count:'8 types', intro:'Your note defines a noun as “naming words” and lists eight types.', types:[
['Countable Noun','Nouns that can be counted.','book, student, tree'],
['Uncountable Noun','Nouns treated as uncountable.','water, gold, hair'],
['Proper Noun','A specific name of a person, place, or thing.','Lahore, Quaid-e-Azam, Allama Iqbal'],
['Common Noun','A general name for a person, place, animal, or thing.','city, leader, school'],
['Abstract Noun','A noun connected with feelings or emotions.','happiness, excitement, freedom'],
['Concrete Noun','A physical thing; your notes give examples such as “gold, table.”','table, bag, bottle'],
['Material Noun','A noun referring to a material/substance.','gold, water'],
['Collective Noun','A noun referring to a collection or group.','collection, family, team']
]},
{ id:'pronoun', title:'Pronoun', subtitle:'Used instead of a noun', count:'7 types', intro:'Your note says: “Pronouns are the words which we can use instead of Noun.”', types:[
['Personal Pronouns','Personal pronouns in the notes include he, she, they, we.','he, she, they, we'],
['Demonstrative Pronouns','Pointing/reference words listed in the notes.','that, this, those, these, it'],
['Relative Pronouns','Words listed in the notes as relative pronouns.','who, whom, where, which'],
['Possessive Pronouns','Shows possession/ownership; the notes give “Ali’s pen” and “This book is mine.”','mine, yours, his, hers'],
['Reflexive Pronouns','The notes say: “In which we use self.”','myself, himself'],
['Reciprocal Pronouns','The notes connect these with “everyone — each other — one and only.”','each other, one another'],
['Interrogative Pronouns','Used for questioning sentences.','who is Ali?']
]},
{ id:'verb', title:'Verb', subtitle:'Action / state of being', count:'6 types', intro:'Your note describes verbs through action or state of being and says a sentence cannot be made without a verb.', types:[
['Modal Verbs','Possibility, permission, or order.','can, should, may'],
['Regular Verb','The notes indicate regular forms using “-ed, -d.”','walk → walked'],
['Irregular Verb','A verb in which the form changes.','go → went → gone'],
['Helping Verb','A verb that helps another verb.','is, am, are, has'],
['Transitive Verb','Your note example: “I am going to buy a car.”','buy a car'],
['Intransitive Verb','Your note example: “Sue is crying”; actioned but cannot be touched.','crying']
]},
{ id:'adjective', title:'Adjective', subtitle:'Quality of a noun / subject', count:'8 types', intro:'Your note gives: “Quality of an Noun, Subject” and the example “He is a brave boy.”', types:[
['Demonstrative Adjective','Points to a specific noun.','this, that, those, these'],
['Descriptive Adjective','Describes the quality, kind, or condition of a noun.','beautiful, yellow, fresh'],
['Possessive Adjective','Shows ownership or belonging.','my, your, his, her, its, their'],
['Quantitative Adjective','Tells “how much” or a general (not exact) amount.','some, many, several, enough, much, little, each, every'],
['Numerical Adjective','Tells the exact number or order of nouns.','one, two, twenty, first, second'],
['Interrogative Adjective','Used before a noun to ask a question.','what, which, whose'],
['Comparative Adjective','Compares two nouns; the notes mention “-er” or “more.”','bigger than, newer than'],
['Superlative Adjective','Compares three or more nouns, showing the highest degree.','best, tallest, most useful']
]},
{ id:'adverb', title:'Adverb', subtitle:'How • when • where', count:'4 types', intro:'Your note prompts: how an action is formed, when, and where.', types:[
['Adverb of Manner','Shows how an action is performed.','very quickly'],
['Adverb of Frequency','Shows how often the action is performed.','often, always, sometimes'],
['Adverb of Time','Shows when an action happens.','tomorrow, yesterday'],
['Adverb of Place','Shows where an action happens.','here, there']
]},
{ id:'preposition', title:'Preposition', subtitle:'Where • time • movement • place', count:'4 note categories', intro:'Your handwritten page spells this as “Preposition” and groups examples by time, movement, and place.', types:[
['Preposition of Time','Describes the time.','at, on, in, before, after'],
['Preposition of Movement','Describes movement or a change in distance.','to, into, across'],
['Preposition of Place','Points to a specific place.','in, on, under, near'],
['Preposition — Where','The top line of the note gives “where” as the core idea.','where, under, beside']
]},
{ id:'conjunction', title:'Conjunction', subtitle:'Joining words / ideas', count:'3 types', intro:'Your note lists three types: Coordinate, Sub ordinate, and Co-relative.', types:[
['Coordinate Conjunction','Listed in the notes as the first type.','and, but, or'],
['Sub ordinate Conjunction','Listed in the notes as the second type; the page also distinguishes independent/dependent ideas.','because, although, when'],
['Co-relative Conjunction','Written as “Co-relative” in the notes.','either…or, neither…nor, both…and']
]},
{ id:'interjection', title:'Interjection', subtitle:'Feelings • emotions', count:'Definition', intro:'Your note says an interjection expresses feelings and emotions.', types:[
['Interjection','Expresses feelings or emotions.','Oh!, Wow!, Alas!, Hurrah!']
]},
];

const EXTRA = [
{title:'Tenses', text:'Your notes also include Tenses with three headings: Past, Present, Future.', items:['Past','Present','Future']},
{title:'Sub ordinate note', text:'The handwritten note records: “Independent — gives a meaning” and “dependent — does not gives a meaning.” This wording is preserved as a source note.', items:['Independent — gives a meaning','Dependent — does not gives a meaning']}
];

const PARAGRAPHS = [
{id:'nouns',title:'Nouns Found in the Paragraph',label:'Original paragraph (nouns highlighted in the source)',text:'There are a lot of stars in the sky. I feel happy when I see the stars. Quaid-e-Azam is a great leader and Allama Iqbal is our national poet. Gold is made up of different items. He have a collection of clothes in a cupboard.',note:'The original paragraph is preserved from the supplied source screenshot. The handwritten notebook also contains this noun practice.'},
{id:'journey',title:'A Journey to Lahore',label:'Raw paragraph from the supplied material',text:'Last Sunday, I visited the beautiful city of Lahore with my family. I started the journey early in the morning and reached Lahore after 3 hours. On my way, I saw many trees, flowers, mountains, and schools. I felt great happiness and excitement while learning about the brave people who had worked for the freedom of the country. In the evening, the family sat in a small restaurant and enjoyed delicious food and rice.',note:'This is the paragraph shown in the supplied “A Journey to Lahore” source.'},
{id:'pronouns',title:'A Trip to the Library',label:'Raw paragraph from the supplied material',text:'Yesterday Sara went to the library because she wanted to find a book for her Urdu assignment. When she entered the library she saw her friend Ali, who was looking for a book too. He asked her, “Which book are you searching for?” Sara replied, “I read something that explains grammar.”',note:'The supplied source highlights pronouns such as she, her, who, he, which, you, I, something, and that.'},
{id:'verbs',title:'Verbs Found in the Paragraph',label:'Paragraph (verbs underlined in the source)',text:'Ayesha walks to school every morning and carries a small bag. She is studying English because she wants to improve her speaking skills. Her teacher can help her with difficult words, and Ayesha should practice every day. Yesterday, she wrote a short story and gave it to her teacher. The teacher smiled and praised her.',note:'The source groups these verbs by type in a table.'},
{id:'verbs2',title:'Verb Practice — Hassan',label:'Paragraph (verbs underlined in the source)',text:'Every morning, Hassan wakes up early and prepares himself for college. He usually walks to the bus stop, but today he is waiting for his friend because they are going to attend an important seminar. Hassan can speak English confidently, and he should practice regularly to improve his communication skills. Yesterday, he completed his assignment, checked it carefully, and submitted it to his teacher. His teacher praised him because he had worked very hard. While Hassan was returning home, he saw a little boy who was crying near the road. Hassan stopped, helped the boy, and called his parents. The boy thanked him and smiled happily. Hassan felt proud because he had done something kind for another person.',note:'This second supplied verb paragraph contains regular, helping, modal, transitive/intransitive and tense examples.'},
{id:'adjectives',title:'Paragraph With Adjectives Highlighted',label:'Raw adjective paragraph from the supplied material',text:'Last Sunday, our school arranged a wonderful educational trip to a beautiful historical village near the city. Twenty students and three teachers left the school early in the morning in a large yellow bus. Each student carried a small bag, a water bottle, and some healthy food for the journey. Our kind teacher, Mr. Ahmed, gave us several useful instructions before we started our exciting journey. He told us to stay together and take care of our personal belongings. After two hours, we reached a peaceful village surrounded by green fields and tall trees. The fresh air and cool weather made everyone happy. We visited an old museum where we saw many interesting paintings, ancient coins, and beautiful wooden chairs. A friendly guide showed us different rooms and told us amazing stories about the brave people who had lived there many years ago. Some students asked difficult questions, while other students carefully listened to the guide. After the museum visit, we walked towards a large garden with colorful flowers and soft grass. The teachers gave us enough time to enjoy the natural beauty of the place. My best friend, Sara, took many lovely pictures with her new camera. At lunchtime, we sat under a huge tree and shared our delicious food with one another. Every student enjoyed the tasty sandwiches, fresh fruit, and cold drinks. In the afternoon, we played several funny games and had a wonderful time together. Before returning home, each student bought a small traditional gift from the village market. It was a memorable day, and everyone felt proud of having such a useful and enjoyable experience.',note:'The source screenshot explicitly notes that this paragraph does not contain demonstrative, interrogative, or (as visible in the note) other missing adjective types; use the paragraph as supplied rather than inventing missing examples.'}
];


const PARAGRAPH_SOLUTIONS = {
  nouns: {
    focus:'Nouns — identified and classified using the noun categories in your university notes.',
    rows:[
      ['stars','Common • Concrete • Countable'],['sky','Common • Concrete'],['Quaid-e-Azam','Proper'],['leader','Common • Concrete • Countable'],['Allama Iqbal','Proper'],['poet','Common • Concrete • Countable'],['Gold','Material • Uncountable'],['items','Common • Concrete • Countable'],['collection','Collective'],['clothes','Common • Concrete'],['cupboard','Common • Concrete • Countable']
    ],
    note:'The classification follows the categories written in your notes. Some words can reasonably receive more than one label, so the table shows the useful overlapping types.'
  },
  journey: {
    focus:'Nouns — identified from the Lahore paragraph and classified where the note categories fit clearly.',
    rows:[
      ['Sunday','Proper'],['city','Common • Concrete • Countable'],['Lahore','Proper'],['family','Collective'],['journey','Common • Abstract'],['morning','Common • Abstract'],['hours','Common • Concrete • Countable'],['way','Common • Concrete • Countable'],['trees','Common • Concrete • Countable'],['flowers','Common • Concrete • Countable'],['mountains','Common • Concrete • Countable'],['schools','Common • Concrete • Countable'],['happiness','Abstract'],['excitement','Abstract'],['people','Common • Concrete • Countable'],['freedom','Abstract'],['country','Common • Concrete • Countable'],['evening','Common • Abstract'],['restaurant','Common • Concrete • Countable'],['food','Material • Uncountable'],['rice','Material • Uncountable']
    ],
    note:'The source page visually highlights these nouns. “Journey”, “morning”, and “evening” are treated as common nouns with an abstract/time sense; terminology can vary by grammar textbook.'
  },
  pronouns: {
    focus:'Pronouns — identified in sequence, with the closest category from your notes.',
    rows:[
      ['she','Personal','Sara'],['her','Possessive (as taught in your notes)','Sara / Sara’s assignment'],['she','Personal','Sara'],['her','Possessive (as taught in your notes)','Sara'],['Who','Relative','the friend / Ali'],['He','Personal','Ali'],['her','Possessive (as taught in your notes)','Sara'],['Which','Interrogative','book'],['you','Personal','the person being addressed'],['I','Personal','Sara'],['something','Indefinite — not listed among your 7 note categories','an unspecified thing'],['that','Relative','something']
    ],
    note:'Your handwritten classification uses “possessive pronoun” for forms such as her. In modern grammar, her before a noun is often called a possessive determiner; this app keeps your university-note terminology for quiz revision. “Something” is an indefinite pronoun, which is not one of the seven categories listed in your supplied notes.'
  },
  verbs: {
    focus:'Verbs — the underlined verbs from the source paragraph, classified by form/role.',
    rows:[
      ['walks','Regular Verb'],['carries','Regular Verb'],['is','Helping Verb'],['studying','Regular main verb / present participle'],['wants','Regular Verb'],['improve','Regular Verb'],['can','Modal Verb'],['help','Regular Verb'],['should','Modal Verb'],['practice','Regular Verb'],['wrote','Irregular Verb'],['gave','Irregular Verb'],['smiled','Regular Verb'],['praised','Regular Verb']
    ],
    note:'“is studying” is a verb phrase: is = helping verb and studying = main verb. “can help” and “should practice” similarly contain a modal plus a main verb.'
  },
  verbs2: {
    focus:'Verbs — the underlined verbs from the Hassan paragraph, classified by the categories used in your notes.',
    rows:[
      ['wakes','Regular Verb'],['prepares','Regular Verb'],['walks','Regular Verb'],['is waiting','Helping + Regular main verb'],['are going','Helping + Regular main verb'],['attend','Regular Verb'],['can speak','Modal + Regular main verb'],['should practice','Modal + Regular main verb'],['improve','Regular Verb'],['completed','Regular Verb'],['checked','Regular Verb'],['submitted','Regular Verb'],['praised','Regular Verb'],['had worked','Helping + Regular main verb'],['was returning','Helping + Regular main verb'],['saw','Irregular Verb'],['was crying','Helping + Regular main verb'],['stopped','Regular Verb'],['helped','Regular Verb'],['called','Regular Verb'],['thanked','Regular Verb'],['smiled','Regular Verb'],['felt','Irregular Verb'],['had done','Helping + Irregular main verb']
    ],
    note:'The source underlines the verb forms. Where a phrase contains a helping/modal verb plus a main verb, both roles are shown instead of forcing the whole phrase into one category.'
  },
  adjectives: {
    focus:'Adjectives — the highlighted words in the supplied adjective paragraph, classified using your eight adjective types.',
    rows:[
      ['our','Possessive'],['wonderful','Descriptive'],['educational','Descriptive'],['beautiful','Descriptive'],['historical','Descriptive'],['Twenty','Numerical'],['three','Numerical'],['large','Descriptive'],['yellow','Descriptive'],['Each','Quantitative'],['small','Descriptive'],['some','Quantitative'],['healthy','Descriptive'],['several','Quantitative'],['useful','Descriptive'],['our','Possessive'],['exciting','Descriptive'],['our','Possessive'],['personal','Descriptive'],['two','Numerical'],['peaceful','Descriptive'],['green','Descriptive'],['tall','Descriptive'],['fresh','Descriptive'],['cool','Descriptive'],['happy','Descriptive'],['old','Descriptive'],['interesting','Descriptive'],['ancient','Descriptive'],['beautiful','Descriptive'],['wooden','Descriptive'],['friendly','Descriptive'],['different','Descriptive'],['amazing','Descriptive'],['brave','Descriptive'],['many','Quantitative'],['Some','Quantitative'],['difficult','Descriptive'],['other','Quantitative'],['large','Descriptive'],['colorful','Descriptive'],['soft','Descriptive'],['enough','Quantitative'],['natural','Descriptive'],['My','Possessive'],['best','Superlative'],['many','Quantitative'],['lovely','Descriptive'],['her','Possessive'],['new','Descriptive'],['huge','Descriptive'],['delicious','Descriptive'],['tasty','Descriptive'],['fresh','Descriptive'],['cold','Descriptive'],['several','Quantitative'],['funny','Descriptive'],['wonderful','Descriptive'],['each','Quantitative'],['small','Descriptive'],['traditional','Descriptive'],['memorable','Descriptive'],['proud','Descriptive'],['useful','Descriptive'],['enjoyable','Descriptive']
    ],
    note:'This follows the highlighting on the supplied source page. The source itself notes that demonstrative and interrogative adjective examples are not present in this paragraph, so they are not invented here.'
  }
};

const QUIZ = [
['Which type of noun is “Lahore”?',['Common','Proper','Abstract','Collective'],'Proper'],
['Which noun type is connected with feelings or emotions in your notes?',['Abstract','Material','Proper','Countable'],'Abstract'],
['Which pronoun type is shown by “myself”?',['Relative','Reflexive','Interrogative','Demonstrative'],'Reflexive'],
['Which verb type is associated with possibility, permission or order in your notes?',['Modal','Regular','Irregular','Helping'],'Modal'],
['“walk → walked” is the note’s example of which verb type?',['Irregular','Helping','Regular','Intransitive'],'Regular'],
['Which adjective type tells the exact number or order of nouns?',['Quantitative','Descriptive','Numerical','Possessive'],'Numerical'],
['“bigger than” is an example of which adjective type?',['Superlative','Comparative','Interrogative','Demonstrative'],'Comparative'],
['Which adverb type answers “How often?”',['Manner','Place','Time','Frequency'],'Frequency'],
['Which adverb type is “tomorrow”?',['Time','Place','Manner','Frequency'],'Time'],
['Which conjunction category is listed first in your notes?',['Sub ordinate','Co-relative','Coordinate','Interjection'],'Coordinate'],
['What does an interjection express according to your notes?',['Ownership','Movement','Feelings and emotions','Exact number'],'Feelings and emotions'],
['Which three tense headings appear in your notes?',['Past, Present, Future','Past, Future, Conditional','Present, Perfect, Future','Past, Continuous, Future'],'Past, Present, Future']
];

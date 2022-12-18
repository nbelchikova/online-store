export interface IGoods {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  image1: string;
  image2: string;
  cost: number;
  warehouse: number;
}

export const itemsData: IGoods[] = [
  {
    id: 1,
    name: 'Настольная голубая елка в мешочке Верона 60 см',
    brand: 'Beatrees',
    category: 'Искусственные елки',
    description:
      'Ель закреплена на устойчивой подставке в виде декоративного мешочка, которая позволяет расположить ее на столе, подоконнике или в любом удобном для вас месте. Эта модель елки не требует сборки, достаточно просто достать ее из упаковки и слегка распушить ветви - и ваша новогодняя красавица готова радовать вас и ваших близких!',
    image1: '../public/id1.jpg',
    image2: '../public/id1_1.jpg',
    cost: 2030,
    warehouse: 7,
  },
  {
    id: 2,
    name: 'Настольная елка Айс Тиффани 90 см с ягодами и шишками',
    brand: 'Beatrees',
    category: 'Искусственные елки',
    description:
      'Это елочка по-настоящему волшебна, она в один миг создаст в вашем доме сказочную новогоднюю атмосферу и будет радовать вас и ваших близких, а ее необычный декор в виде натуральных шишек и ярко-красных ягодок добавят празднику задорства и веселья.',
    image1: '../public/id2.jpg',
    image2: '../public/id2_1.jpg',
    cost: 3040,
    warehouse: 13,
  },
  {
    id: 3,
    name: 'Искусственная елка с лампочками Dakota заснеженная 122 см в кашпо',
    brand: 'Beatrees',
    category: 'Искусственные елки',
    description:
      'Елка с гирляндой Дакота - элегантная гостья из сказочного леса. Она притягивает взгляд и завораживает своей пышной кроной, в глубине которой поселились уютные теплые огоньки. Пушистые веточки с длинными иголочками формируют аккуратный вытянутый силуэт, благодаря которому деревце смотрится утонченно и благородно. На их кончиках сверкают маленькие льдинки, освежая торжественный образ',
    image1: '../public/id3.jpg',
    image2: '../public/id3_1.jpg',
    cost: 5100,
    warehouse: 21,
  },
  {
    id: 4,
    name: 'Искусственная елка с лампочками Версальская заснеженная 210 см',
    brand: 'Breitner',
    category: 'Искусственные елки',
    description:
      'Большая искусственная ель поднимается над полом в белой дымке искусственного снега, будто Афродита из взбитой морской пены. Роскошная, словно ее в самом деле тайком вывезли из резиденции французских королей, украшенная уютными огоньками, заснеженная елка придает атмосфере любой вечеринки размах, нотки шика и привкус великосветского бала. Попробуйте не испытать восторженный трепет, когда перед вами переливается стеклянным блеском игрушек и всполохами огней высокая ель с гирляндой из почти полусотни теплых LED ламп, и зимние сумерки разом наполняются волшебством…',
    image1: '../public/id4.jpg',
    image2: '../public/id4_1.jpg',
    cost: 2030,
    warehouse: 17,
  },
  {
    id: 5,
    name: 'Искусственная сосна с гирляндой Bedford заснеженная 228 см с шишками',
    brand: 'Breitner',
    category: 'Искусственные елки',
    description:
      'Лесная красавица сочетает в себе пышность сосны и идеальную форму елки, благодаря чему смотрится чудесно даже без декора! Высокая, статная и пышная искусственная сосна с шишками припорошена снегом, что придает ей вид деревца, только что принесенного из сказочной чащи. Эффектным дополнительным декором служат 600 лампочек, которые обрамляют пушистую красотку от макушки до нижних веток белым теплым сиянием сказочных огоньков! Елка с гирляндой, покрытая снежными хлопьями и декорированная шишками, станет чудесной гостьей на вашем празднике и создаст атмосферу волшебства!',
    image1: '../public/id5.jpg',
    image2: '../public/id5_1.jpg',
    cost: 9900,
    warehouse: 23,
  },
  {
    id: 6,
    name: 'Деревянная светящаяся елка Джероме 28 см',
    brand: 'Breitner',
    category: 'Искусственные елки',
    description:
      'Деревянная елка Джероме притягивает своим лаконичным и одновременно необычным дизайном. В фигурке проделаны аккуратные прорези в виде звездочек, дополненные миниатюрными лампочками с теплым свечением. Благодаря такому оформлению декоративная елка выглядит мило и оригинально. Она будет смотреться эстетично и стильно в композиции с украшениями в скандинавском, эко или рустик стилях.',
    image1: '../public/id6.jpg',
    image2: '../public/id6_1.jpg',
    cost: 700,
    warehouse: 15,
  },
  {
    id: 7,
    name: 'Набор пластиковых шаров This is Christmas 8 см, 42 шт',
    brand: 'Boltze',
    category: 'Пластиковые и стеклянные шары',
    description:
      'Пластиковые новогодние шары прекрасно подходят для основы елочного наряда: количество игрушек в наборе достаточно для того, чтобы украсить от макушки до самых нижних веток елочку средней высоты. В наборе вы найдете фигурные шарики, созданные в едином стиле, но различающиеся по оттенкам: такой дизайн внесет яркое разнообразие в образ елки! Красные и золотые шарики идеально подойдут для создания нежного наряда елки в зимней атмосфере.',
    image1: '../public/id7.jpg',
    image2: '../public/id7_1.jpg',
    cost: 300,
    warehouse: 25,
  },
  {
    id: 8,
    name: 'Набор пластиковых шаров Winter Candy: White silver 8 см, 16 шт',
    brand: 'Boltze',
    category: 'Пластиковые и стеклянные шары',
    description:
      'Елочные шары из пластика Winter Candy помогут создать роскошный образ для праздничного деревца. Коллекция белоснежных украшений включает в себя луковки, шишки и классические шарики, которые дополнены серебристыми акцентами. Благодаря классическому дизайну шары легко комбинируются с игрушками других стилей и оттенков.',
    image1: '../public/id8.jpg',
    image2: '../public/id8_1.jpg',
    cost: 400,
    warehouse: 33,
  },
  {
    id: 9,
    name: 'Набор пластиковых шаров Winter Candy: Green 8 см, 16 шт',
    brand: 'Boltze',
    category: 'Пластиковые и стеклянные шары',
    description:
      'Елочные шары из пластика Winter Candy помогут создать роскошный образ для праздничного деревца. Коллекция зеленых украшений включает в себя луковки, шишки и классические шарики, которые дополнены серебристыми акцентами. Благодаря классическому дизайну шары легко комбинируются с игрушками других стилей и оттенков.',
    image1: '../public/id9.jpg',
    image2: '../public/id9_1.jpg',
    cost: 800,
    warehouse: 15,
  },
  {
    id: 10,
    name: 'Коллекция стеклянных елочных шаров Рождественский Манхэттен 3.5 см, 16 шт',
    brand: 'Edelman',
    category: 'Пластиковые и стеклянные шары',
    description:
      'Королевский жемчужный, праздничный красный и хвойный изумрудный – такие стеклянные шарики вы найдете в этом наборе. Вместе они, развешанные по пышной кроне ели, будут светиться и мерцать, создавая великолепную рождественскую композицию. Традиционные цвета зимнего торжества элегантно впишутся в любой интерьер.',
    image1: '../public/id10.jpg',
    image2: '../public/id10_1.jpg',
    cost: 1000,
    warehouse: 35,
  },
  {
    id: 11,
    name: 'Стеклянный елочный шар Зодиак - Кот Ральф в новогоднем колпачке 9 см красный',
    brand: 'Edelman',
    category: 'Пластиковые и стеклянные шары',
    description:
      'Над спящей землею висит зимнее небо, полное звезд, тихо шуршит по стеклам вьюга и поблескивают в темноте елочные игрушки-шары. Где-то далеко разливается нежный перезвон бубенцов - Санта на оленьей упряжке тренируется перед праздничным заездом. Но никто его не слышит, потому что в доме все спят, и лишь большой рыжий кот навострил ухо - даже сдвинул колпачок набекрень, чтобы ничего не пропустить. Слушает растекающуюся в морозном воздухе мелодию, тихо мурлычет в такт и таинственно улыбается в усы. - "Шшшурх " - шумит метель. - "Дон-дон-дон! " - вторят ей бубенцы. - "Дзынь! " - подпевают шары на новогодней елке, сталкиваясь круглыми боками. Красота. Сказка. Новый год.',
    image1: '../public/id11.jpg',
    image2: '../public/id11_1.jpg',
    cost: 250,
    warehouse: 11,
  },
  {
    id: 12,
    name: 'Стеклянная елочная игрушка с композицией Птичий Диалог - Christmas Garden 16 см',
    brand: 'Edelman',
    category: 'Пластиковые и стеклянные шары',
    description:
      'Пластиковые новогодние шары прекрасно подходят для основы елочного наряда: количество игрушек в наборе достаточно для того, чтобы украсить от макушки до самых нижних веток елочку средней высоты. В наборе вы найдете фигурные шарики, созданные в едином стиле, но различающиеся по оттенкам: такой дизайн внесет яркое разнообразие в образ елки! Красные и золотые шарики идеально подойдут для создания нежного наряда елки в зимней атмосфере.',
    image1: '../public/id12.jpg',
    image2: '../public/id12_1.jpg',
    cost: 280,
    warehouse: 25,
  },
  {
    id: 13,
    name: 'Светодиодная гирлянда нить Lumineo Snake 22.5 м, 1000 экстра теплых белых LED ламп',
    brand: 'Bondibon',
    category: 'Электрогирлянды',
    description:
      'Гирлянда нить Lumineo Snake моментально создаст праздничное настроение и эффектную визуальную картину как в интерьере, так и на улице. Это прекрасный вариант иллюминации для новогодней елки, стен, окон, а также открытых пространств в саду. Восемь режимов свечения позволяют выбрать оптимальную динамику и тип светового перехода под настроение и обстановку: тысяча экстра теплых белых лампочек светодиодной нити станут прекрасным фоном и на шумной вечеринке и во время спокойных вечеров в кругу близких людей.',
    image1: '../public/id13.jpg',
    image2: '../public/id13_1.jpg',
    cost: 760,
    warehouse: 87,
  },
  {
    id: 14,
    name: 'Светодиодная гирлянда на батарейках Luca Snake 4 м, 200 разноцветных LED ламп',
    brand: 'Bondibon',
    category: 'Электрогирлянды',
    description:
      'Разноцветная гирлянда нить Luca Snake подойдет и для украшения елки, и для декорирования интерьера. Маленькое расстояние между лампочками позволяет богато декорировать вашу хвойную красавицу или оформить карниз и перила на улице. Серия гирлянд неспроста называется Snake: при включении плотно расположенные друг к другу светодиоды образуют светящийся объемный жгут, который издалека напоминает сияющую змейку. Смотрится очень эффектно! Гирлянда на батарейках очень удобна, так как не привязана к источнику питания. Ее можно использовать и в помещении, и под открытым небом.',
    image1: '../public/id14.jpg',
    image2: '../public/id14_1.jpg',
    cost: 860,
    warehouse: 63,
  },
  {
    id: 15,
    name: 'Светодиодный занавес Quality Light 2*2 м, 400 теплых белых LED ламп',
    brand: 'Bondibon',
    category: 'Электрогирлянды',
    description:
      'Световой занавес необыкновенно наряден, он украсит любое помещение, придав ему радостный праздничный стиль. С помощью светового занавеса можно создавать красивые декоративные световые ширмы, оформлять огнями разнообразные плоскости, декорировать объемные объекты.',
    image1: '../public/id15.jpg',
    image2: '../public/id15_1.jpg',
    cost: 740,
    warehouse: 37,
  },
  {
    id: 16,
    name: 'Гирлянда из белых лампочек Ретро, 20 ламп, теплые белые LED, 9.5 м',
    brand: 'Edelman',
    category: 'Электрогирлянды',
    description:
      'Задумали необыкновенный новогодний декор на открытой веранде или в беседке? Без ярких уличных гирлянд точно не обойтись. Гирлянда из лампочек понравится любителям ретро стиля - уютные теплые огоньки преобразят любую площадку. А ваше настроение последует за огоньками: взлетит до небес! Благодаря наличию коннектора вы можете соединить до 5 нитей в одну линию и получить почти 50-метровую LED гирлянду с лампочками - такой подсветки хватит на весь двор или сад. При этом светодиодная ретро гирлянда подойдет не только для уличной террасы, но и для оформления дома, ресторана или кафе.',
    image1: '../public/id16.jpg',
    image2: '../public/id16_1.jpg',
    cost: 1160,
    warehouse: 26,
  },
  {
    id: 17,
    name: 'Светодиодная гирлянда Classic Retro 5 м, 100 разноцветных LED ламп',
    brand: 'Edelman',
    category: 'Электрогирлянды',
    description:
      'Цветная гирлянда с режимами свечения - верный способ добавить интерьеру пеструю изюминку. Озорные огоньки, легко меняющие свой характер по щелчку контроллера, непременно повеселят и детей, и взрослых. Украсьте гирляндой окно, изголовье кровати или новогоднюю ель - смотреться будет невероятно празднично.',
    image1: '../public/id17.jpg',
    image2: '../public/id17_1.jpg',
    cost: 1100,
    warehouse: 23,
  },
  {
    id: 18,
    name: 'Гирлянда из лампочек Ludovico, 8 ламп с теплым белым светом, 2.1 м',
    brand: 'Edelman',
    category: 'Электрогирлянды',
    description:
      'Гирлянда для интерьера Ludovico покорит любителей необычного декора с легким винтажным флером. Сквозь фактурные лампочки золотистого оттенка пробивается теплое сияние светодиодов, словно согревая пространство вокруг. Обмотка в виде пенькового шпагата идеально гармонирует с необычными плафонами и подчеркивает их ретро-шарм. Повесьте гирлянду с лампочками на стену, у оконного карниза, протяните под потолком или у изголовья кровати - будет смотреться очень стильно и эффектно.',
    image1: '../public/id18.jpg',
    image2: '../public/id18_1.jpg',
    cost: 1200,
    warehouse: 27,
  },
  {
    id: 19,
    name: 'Декоративный светильник Домик в Валь Торанс 31 см, 8 LED ламп',
    brand: 'Breitner',
    category: 'Световой декор',
    description:
      'Чудесный светильник на окно, под елку или на стол, который наполнит дом гармонией и создаст вокруг себя ореол творческого вдохновения. На интерьерном светильнике изображена спокойная ночь в горном лесу: луна освещает маленький домик, придавая картине атмосферу спокойствия. Лампочки озаряют композицию теплым белым и синим светом, который делает этот светильник еще и уютным ночником.',
    image1: '../public/id19.jpg',
    image2: '../public/id19_1.jpg',
    cost: 1230,
    warehouse: 17,
  },
  {
    id: 20,
    name: 'Рождественская горка Sara 43*38 см красная с орнаментом, 7 электрических свечей',
    brand: 'Breitner',
    category: 'Световой декор',
    description:
      'Чудесное интерьерное украшение, рождественская горка-светильник с семью электрическими свечами, станет королевой праздничного декора! Поставьте ее на обеденный стол или комод у стены, и комната в мгновение ока наполнится теплым светом и праздничным настроением. Установите горку на подоконник, и мягкое мерцание огней, отраженное в оконном стекле, многократно усилит ее очарование. На их таинственное сияние роем слетятся рождественские чудеса, удача и счастье!',
    image1: '../public/id20.jpg',
    image2: '../public/id20_1.jpg',
    cost: 1360,
    warehouse: 24,
  },
  {
    id: 21,
    name: 'Домик с подсветкой Villana Ginger 41 см',
    brand: 'Breitner',
    category: 'Световой декор',
    description:
      'Новогодний пряничный домик с подсветкой Villana Ginger создан дарить уют и гармонию в интерьере. Необычный дизайн делает его похожим на сладкий домик из нежного шоколада, разрисованного белой глазурью. Но стоит только зажечь в нем огоньки, как его причудливые окошки загораются теплым сиянием пламени, от которого пространство наполняется уютом. Светящийся домик можно использовать в качестве прикроватного ночника или декора интерьера, а также для создания композиций и световых инсталляций.',
    image1: '../public/id21.jpg',
    image2: '../public/id21_1.jpg',
    cost: 1550,
    warehouse: 21,
  },
  {
    id: 22,
    name: 'Светодиодная картина Огни уютного Вечера 40*40 см, на батарейках',
    brand: 'Breitner',
    category: 'Световой декор',
    description:
      'Три винтажных подсвечника как три символа уютного зимнего вечера: белый оттенок ребристого стекла напоминает о пушистом снежке за окном, нефритовый - об ароматном зеленое чае в любимой кружке, а карамельный - о вкуснейшем пироге, только-только вытащенном из жаркой пасти духовой печи. Замечательная картина с подсветкой подарит вам много приятных образов и очарует сиянием спрятанных в ней огоньков.',
    image1: '../public/id22.jpg',
    image2: '../public/id22.jpg',
    cost: 1440,
    warehouse: 27,
  },
  {
    id: 23,
    name: 'Светодиодная картина Город на Канале 3, 30*40 см, батарейки',
    brand: 'Breitner',
    category: 'Световой декор',
    description:
      'Вечерний Амстердам прекрасен! Хотите, чтобы атмосфера этого романтичного города сопровождала вас постоянно? Вы можете приобрести светодиодную картину с пейзажами зимней голландской столицы. Зеркальная гладь каналов, покрытые инеем черепичные крыши, нежные оттенки заката и, конечно, горящие камины в аккуратных домиках. От полотен в приглушенной синей гамме невозможно оторвать взгляд. Они приковывают внимание, и ты словно сам оказываешься на мощеном тротуаре возле старинного фонаря. Чего ты ждешь? Исполнения желаний и скорейшего возвращения домой, где дрова потрескивают в камине…',
    image1: '../public/id23.jpg',
    image2: '../public/id23_1.jpg',
    cost: 1560,
    warehouse: 11,
  },
  {
    id: 24,
    name: 'Светодиодная картина Зимнее Кантри 40*30 см на батарейках ',
    brand: 'Breitner',
    category: 'Световой декор',
    description:
      'Светодиодная картина в стиле кантри - уютный аксессуар, который украсит собой интерьер и привнесет в него нотки тепла. Полотно искусно дополнено маленькими лампочками - они изящно вписываются в натюрморт и создают впечатление потрясающего объёма и глубины - рисунок словно оживает на ваших глазах. Ищете сувенир с душой? Вот он!',
    image1: '../public/id24.jpg',
    image2: '../public/id24_1.jpg',
    cost: 630,
    warehouse: 24,
  },
  {
    id: 25,
    name: 'Карнавальный Плащ Принцессы - Голубой Сатин, рост 110-122 см (Батик)',
    brand: 'Bondibon',
    category: 'Карнавальные костюмы',
    description:
      'Каждая девочка хочет почувствовать себя сказочной принцессой! Надеть свой самый лучший наряд, взмахнуть волшебной палочкой - и сделать так, что исполнятся все самые заветные желания самой малышки и ее любимых друзей. Такую возможность маленьким модницам всегда готова подарить фирма "Батик", создающая удивительные маскарадные костюмы для новогодних утренников, посещения новогодних спектаклей, тематических вечеринок и фотосессий. Прекрасный пример - детская карнавальная накидка для девочки, выполненная из нежно-голубого сатина.',
    image1: '../public/id25.jpg',
    image2: '../public/id25_1.jpg',
    cost: 2430,
    warehouse: 24,
  },
  {
    id: 26,
    name: 'Карнавальный костюм Сделай сам - Санточка, 98-128 рост',
    brand: 'Bondibon',
    category: 'Карнавальные костюмы',
    description:
      'Новогодний костюм Санточка из серии "Сделай сам" позволит вам почувствовать себя настоящим модельером! Ведь с его помощью вы вместе с ребёнком сможете собрать маскарадный костюм самостоятельно. Это очень интересное и увлекательное занятие как для детей, так и для взрослых. Следуйте инструкции, входящей в комплект, добавьте немного фантазии, чтобы придать индивидуальности - и наряд готов! Этот новогодний костюм для девочки подойдет на любой праздник в садике или школе и для участия в детском спектакле. Великолепное качество и разнообразие используемых материалов - это отличительные особенности российского бренда, которые несомненно придутся вам по душе.',
    image1: '../public/id26.jpg',
    image2: '../public/id26_1.jpg',
    cost: 1220,
    warehouse: 34,
  },
  {
    id: 27,
    name: 'Карнавальный костюм Сделай сам - Пиратка, 98-128 рос',
    brand: 'Bondibon',
    category: 'Карнавальные костюмы',
    description:
      'Новогодний костюм Пиратка из серии "Сделай сам" позволит вам почувствовать себя настоящим модельером! Ведь с его помощью вы вместе с ребёнком сможете собрать маскарадный костюм самостоятельно. Это очень интересное и увлекательное занятие как для детей, так и для взрослых. Следуйте инструкции, входящей в комплект, добавьте немного фантазии, чтобы придать индивидуальности - и наряд готов! Этот новогодний костюм для девочки подойдет на любой праздник в садике или школе и для участия в детском спектакле. Великолепное качество и разнообразие используемых материалов - это отличительные особенности российского бренда, которые несомненно придутся вам по душе.',
    image1: '../public/id27.jpg',
    image2: '../public/id27_1.jpg',
    cost: 1430,
    warehouse: 24,
  },
  {
    id: 28,
    name: 'Шапка Санты с бородой 70*35 см (Koopman)',
    brand: 'Bondibon',
    category: 'Карнавальные костюмы',
    description:
      '«Хо-хо-хо!» – разве не это мечтают услышать все детки в новогоднюю ночь? Преподнесите им удовольствие и получите его сами с декоративной шапкой Санта Клауса. У старичка еще была борода? Это не проблема, ведь она уже пришита к головному убору известного волшебника.',
    image1: '../public/id28.jpg',
    image2: '../public/id28_1.jpg',
    cost: 230,
    warehouse: 15,
  },
  {
    id: 29,
    name: 'Новогодний мешок для подарков Санта 70*50 см (Koopman)',
    brand: 'Bondibon',
    category: 'Карнавальные костюмы',
    description:
      'Хотите устроить деткам настоящий праздник с исполнением желаний? Тогда устройте костюмированное представление с вручением подарков! А чтобы спрятать сюрпризы от любопытных глаз, сложите все приготовленные подарки в мешок Санты с красочной аппликацией. Благодаря его большому размеру он с легкостью поместит в себе все подарочные коробки, а сам внешний вид джутового мешка с изображением Санты прекрасно впишется в праздничную атмосферу.',
    image1: '../public/id29.jpg',
    image2: '../public/id29_1.jpg',
    cost: 560,
    warehouse: 24,
  },
  {
    id: 30,
    name: 'Новогодняя Шапка-ушанка для взрослых, 58 размер (Батик)',
    brand: 'Bondibon',
    category: 'Карнавальные костюмы',
    description:
      'Новогодняя шапка-ушанка - то, что нужно для встречи праздника на улице! Красный цвет и белые снежинки на велюре отлично вписываются в новогодний антураж, а мягкая подкладка будет держать ваши уши в тепле и комфорте. Фиксатор позволяет регулировать натяжение новогодней ушанки на голове, поэтому можно смело пускаться в веселые хороводы - шапка не слетит!',
    image1: '../public/id30.jpg',
    image2: '../public/id30_1.jpg',
    cost: 330,
    warehouse: 14,
  },
];

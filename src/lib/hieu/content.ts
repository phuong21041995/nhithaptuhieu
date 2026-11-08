export type Choice = {
  text: string;
  score: 0 | 1 | 2;
  note: string;
};

export type Tale = {
  id: string;
  no: number;
  name: string;
  title: string;
  seal: string;
  era: string;
  story: string;
  y: string;
  viec: string;
  care?: string;
  quiz: { ask: string; choices: string[]; answer: number; why: string };
  act: { where: string; title: string; story: string; choices: Choice[] };
};

export const GROUPS: { title: string; ids: string[] }[] = [
  { title: "Nhớ cha mẹ", ids: ["thuan", "thuoc", "tang", "gao"] },
  { title: "Nhường và làm vui", ids: ["ao", "huou", "cuoi", "mai"] },
  { title: "Giữ nếp nhà", ids: ["go", "me", "quyt", "com"] },
  { title: "Việc nhỏ mỗi ngày", ids: ["quat", "dau", "ca", "sam"] },
  { title: "Thương mà khôn", ids: ["chao", "mang", "bang", "ho"] },
  { title: "Ở bên lúc khó", ids: ["muoi", "benh", "rua", "tim"] },
];

export const TALES: Tale[] = [
  {
    id: "thuan",
    no: 1,
    name: "Đại Thuấn",
    title: "Hiếu cảm động thiên",
    seal: "舜",
    era: "Đời Ngu",
    story:
      "Thuấn mất mẹ từ nhỏ. Cha và mẹ kế hay giận, em cùng cha cũng không thương anh. Thuấn vẫn hiền, vẫn làm ruộng, vẫn lo cho cha.\nLòng hiếu ấy được kể là cảm đến trời: chim xuống nhặt cỏ, voi xuống kéo cày. Sau này Thuấn được chọn làm vua.",
    y: "Nhà có người khó tính, mình vẫn lễ phép, không trả thù. Hiếu không phải chiều cho qua, mà là không làm nhà thêm giận.",
    viec: "Hôm nay nói một câu nhỏ nhẹ với người trong nhà khi họ đang mệt.",
    quiz: {
      ask: "Chuyện Đại Thuấn muốn nói điều gì?",
      choices: [
        "Lòng hiếu thảo có thể làm người xung quanh mềm lại",
        "Phải giàu thì mới được yêu",
        "Em nghịch thì mình mắng lại cho vừa",
      ],
      answer: 0,
      why: "Thuấn không thắng bằng la. Ông ở hiền lâu, nên người ta nhớ ông là người có hiếu.",
    },
    act: {
      where: "Trong nhà",
      title: "Em đổ lỗi",
      story: "Em giành đồ chơi rồi đổ cho mình. Mẹ đang mệt, chưa kịp hỏi.",
      choices: [
        { text: "Giật lại và mách thật to cho em khóc", score: 0, note: "Mẹ thêm mệt. Giận được một lúc, nhà nặng cả buổi." },
        { text: "Nói nhỏ: mình chơi chung được không, rồi để mẹ nghỉ", score: 2, note: "Đúng ý Thuấn: không thêm giận vào nhà." },
        { text: "Im, nhưng giấu đồ của em để trả", score: 1, note: "Đỡ ồn, nhưng giấu là trả thù. Nói một câu còn hơn." },
      ],
    },
  },
  {
    id: "thuoc",
    no: 2,
    name: "Hán Văn Đế",
    title: "Nếm thuốc trước khi dâng",
    seal: "藥",
    era: "Nhà Hán",
    story:
      "Lưu Hằng làm vua, mẹ ngài ốm. Ngài không giao hết cho người hầu.\nMỗi lần thuốc sắc xong, ngài xem nóng lạnh vừa chưa rồi mới dâng mẹ. Ngày ngày ngài ngồi gần, không bỏ đi chơi khi mẹ chưa yên.",
    y: "Cha mẹ ốm thì ở bên, làm việc nhỏ cho đúng. Không tự ý nếm hay đổi thuốc.",
    viec: "Nếu người lớn ốm, rót nước và hỏi giờ uống thuốc, để người lớn tự uống.",
    care: "Bé không nếm thuốc của người lớn. Thuốc người lớn có thể hại bé.",
    quiz: {
      ask: "Khi cha mẹ ốm, việc nào hợp với chuyện này?",
      choices: [
        "Ở bên, rót nước, nhắc giờ thuốc cho người lớn",
        "Tự nếm thuốc cho giống vua ngày xưa",
        "Đi chơi, về tối mới hỏi một câu",
      ],
      answer: 0,
      why: "Ý chuyện là không bỏ mẹ lúc ốm. Nếm thuốc là cách xưa, nay không làm.",
    },
    act: {
      where: "Buổi tối",
      title: "Mẹ hơi sốt",
      story: "Mẹ nằm, bảo con chơi yên. Bạn rủ ra sân đá bóng.",
      choices: [
        { text: "Đi luôn, về kể là mẹ bảo đi", score: 0, note: "Mẹ đang cần nhà yên. Đi lúc này là quên câu chuyện." },
        { text: "Ở nhà chơi nhỏ, rót nước để sẵn, hỏi mẹ có cần gọi ba không", score: 2, note: "Ở bên mà không làm ồn. Đúng việc của bé." },
        { text: "Ngồi cạnh nhưng bật tivi rất to", score: 1, note: "Có ở bên, nhưng tiếng to làm mẹ thêm mệt." },
      ],
    },
  },
  {
    id: "tang",
    no: 3,
    name: "Tăng Sâm",
    title: "Mẹ cắn ngón, con về",
    seal: "曾",
    era: "Đời Xuân Thu",
    story:
      "Tăng Sâm đi làm xa. Một hôm mẹ nhớ con quá, cắn ngón tay mình.\nÔng đang chặt củi, bỗng thấy lòng không yên, vội về. Mẹ nói: mẹ nhớ con, cắn ngón tay, con đã về.",
    y: "Cha mẹ nhớ mình thì mình về, hoặc nhắn. Đi đâu phải cho nhà biết. Không biến mất cả ngày.",
    viec: "Đi thì chào lúc đi. Về thì thưa một tiếng cho cha mẹ thấy mặt.",
    quiz: {
      ask: "Tăng Sâm vội về vì điều gì?",
      choices: [
        "Ông cảm thấy mẹ đang nhớ mình",
        "Ông hết củi nên về chơi",
        "Bạn gọi ông đi ăn",
      ],
      answer: 0,
      why: "Chuyện muốn nói: lòng con với mẹ gần nhau. Nay thì nhắn tin, chứ đừng im luôn.",
    },
    act: {
      where: "Nhà bạn",
      title: "Chơi quá giờ",
      story: "Mẹ dặn năm giờ về. Đồng hồ đã hơn năm giờ, ván chơi chưa xong.",
      choices: [
        { text: "Chơi nốt, mẹ biết đường tìm", score: 0, note: "Mẹ sẽ lo. Đó là trái chuyện Tăng Sâm." },
        { text: "Xin lỗi bạn, về đúng lời hẹn, chào mẹ khi vào cửa", score: 2, note: "Giữ lời hẹn là để mẹ khỏi nhớ đến đau lòng." },
        { text: "Nhờ bạn nhắn hộ, mình chơi thêm một lúc", score: 1, note: "Có nhắn thì đỡ hơn im, nhưng trễ lời hẹn vẫn làm mẹ đợi." },
      ],
    },
  },
  {
    id: "gao",
    no: 4,
    name: "Tử Lộ",
    title: "Đội gạo trăm dặm",
    seal: "米",
    era: "Đời Xuân Thu",
    story:
      "Nhà Tử Lộ nghèo. Cha mẹ thích cơm, nhà thường chỉ có rau. Ông đội gạo đi bộ rất xa để cha mẹ được ăn no.\nSau này ông làm quan, nhà giàu. Cha mẹ đã mất. Ông buồn: giờ muốn đội gạo về cũng không còn cha mẹ để lo.",
    y: "Thương cha mẹ lúc các người ấy còn đây. Đừng đợi sau mới nhớ.",
    viec: "Bữa nay nhường phần ngon trên mâm cho ông bà hoặc cha mẹ.",
    quiz: {
      ask: "Vì sao Tử Lộ buồn khi đã giàu?",
      choices: [
        "Cha mẹ không còn để ông lo cho nữa",
        "Ông hết thích ăn cơm",
        "Đường đội gạo bị cấm",
      ],
      answer: 0,
      why: "Hiếu có thì giờ. Làm khi cha mẹ còn, một bữa cơm cũng quý.",
    },
    act: {
      where: "Bữa cơm",
      title: "Một đùi gà",
      story: "Mâm chỉ có một đùi gà. Mình rất đói. Bà ngồi cạnh.",
      choices: [
        { text: "Gắp ngay, vì trẻ cần ăn hơn", score: 0, note: "Đói thì xin thêm cơm. Phần ngon nên nhớ tới bà trước." },
        { text: "Mời bà trước, mình ăn phần khác, no vẫn vui", score: 2, note: "Đúng ý Tử Lộ: phần ngon để cho cha mẹ, ông bà." },
        { text: "Chia đôi, nhưng mặt buồn cho bà thấy", score: 1, note: "Có nhường, mà mặt buồn thì bà không ngon miệng." },
      ],
    },
  },
  {
    id: "ao",
    no: 5,
    name: "Mẫn Tử Khiên",
    title: "Áo cỏ bồ mùa đông",
    seal: "衣",
    era: "Đời Xuân Thu",
    story:
      "Mẹ mất, cha cưới mẹ kế. Mẹ kế cho hai em áo bông ấm, còn Mẫn Tử chỉ áo nhồi cỏ, mùa đông rất lạnh.\nCha biết, định đuổi mẹ kế. Mẫn Tử quỳ xin: một người lạnh còn hơn cả ba người lạnh. Cha nguôi. Mẹ kế hối, từ đó thương các con như nhau.",
    y: "Không đổ thêm giận trong nhà. Thấy không công bằng thì nói thật, giọng nhỏ, với người lớn mình tin.",
    viec: "Nếu em bị trêu, mình đứng cạnh em, không cười theo.",
    quiz: {
      ask: "Mẫn Tử xin cha đừng đuổi mẹ kế vì sao?",
      choices: [
        "Ông thương cả nhà, không muốn ba người đều khổ",
        "Ông thích mặc áo lạnh",
        "Ông sợ em hơn sợ rét",
      ],
      answer: 0,
      why: "Ông nói thật nỗi lạnh của mình, nhưng không xin cha làm nhà tan.",
    },
    act: {
      where: "Phòng khách",
      title: "Áo mới chỉ có một",
      story: "Nhà may một áo mới. Mẹ định cho mình. Em nhìn mãi, áo em đã chật.",
      choices: [
        { text: "Mặc ngay, bảo em đợi năm sau", score: 0, note: "Đúng phần thì vẫn nên thấy em. Năm sau là lâu với trẻ." },
        { text: "Nói mẹ: em đang chật, con mặc áo cũ thêm ít hôm cũng được", score: 2, note: "Nhường mà nói rõ, giống Mẫn Tử nghĩ cho cả nhà." },
        { text: "Không lấy, nhưng mách cha là mẹ thiên vị", score: 1, note: "Có thấy em, nhưng mách to làm mẹ đau, nhà nặng." },
      ],
    },
  },
  {
    id: "huou",
    no: 6,
    name: "Đàm Tử",
    title: "Sữa hươu cho cha mẹ",
    seal: "鹿",
    era: "Đời Xuân Thu",
    story:
      "Cha mẹ Đàm Tử già, mắt kém. Thầy thuốc bảo cần sữa hươu. Ông khoác da hươu vào rừng để hòa vào đàn hươu lấy sữa.\nThợ săn suýt bắn. Ông cởi da, kể thật. Thợ săn cảm động, cho sữa mang về.",
    y: "Lo cho cha mẹ, nhưng không liều mạng. Bị hiểu lầm thì nói thật.",
    viec: "Hỏi cha mẹ hôm nay muốn uống nước ấm gì, rồi pha cùng người lớn.",
    care: "Không được vào rừng một mình, không giả làm thú. Dễ bị hại.",
    quiz: {
      ask: "Khi thợ săn giương ná, Đàm Tử làm gì?",
      choices: [
        "Cởi da hươu và nói thật vì sao mình ở đó",
        "Chạy sâu vào rừng cho giống hươu",
        "Giận thợ săn và giành ná",
      ],
      answer: 0,
      why: "Nói thật cứu ông. Bé cũng vậy: việc nguy hiểm thì dừng và kể với người lớn.",
    },
    act: {
      where: "Bếp",
      title: "Bà muốn trà gừng",
      story: "Bà ho nhẹ, bảo thèm trà gừng. Ấm nước sôi đang trên bếp.",
      choices: [
        { text: "Tự rót nước sôi cho nhanh", score: 0, note: "Nước sôi dễ bỏng. Hiếu không phải liều." },
        { text: "Gọi người lớn pha, mình bưng cốc đã nguội bớt bằng hai tay", score: 2, note: "Lo cho bà mà giữ mình an toàn." },
        { text: "Bảo bà đợi tới tối, mình đang xem hoạt hình", score: 1, note: "Không nguy hiểm, nhưng để bà đợi lâu vì màn hình." },
      ],
    },
  },
  {
    id: "cuoi",
    no: 7,
    name: "Lão Lai Tử",
    title: "Giả trẻ để cha mẹ cười",
    seal: "萊",
    era: "Đời Xuân Thu",
    story:
      "Lão Lai Tử đã ngoài bảy mươi. Cha mẹ còn sống và hay buồn.\nÔng mặc áo sặc sỡ, giả làm trẻ con, vừa đi vừa ngã trên nhà cho cha mẹ cười. Ông không xấu hổ, vì nụ cười của cha mẹ quý hơn thể diện.",
    y: "Làm cha mẹ, ông bà vui cũng là hiếu. Ở bên và cười cùng, không cần khoe giỏi.",
    viec: "Kể một chuyện vui hoặc hát một câu cho ông bà nghe.",
    quiz: {
      ask: "Lão Lai Tử giả làm trẻ để làm gì?",
      choices: [
        "Cho cha mẹ già được cười",
        "Để hàng xóm khen mình dễ thương",
        "Để khỏi phải làm việc nhà",
      ],
      answer: 0,
      why: "Ông quên thể diện của mình để cha mẹ bớt buồn. Đó là hiếu.",
    },
    act: {
      where: "Chiều chủ nhật",
      title: "Ông ngồi một mình",
      story: "Ông ngồi ghế, im. Mình vừa học được một bài hát ở lớp.",
      choices: [
        { text: "Vào phòng đóng cửa, hát cho mình nghe", score: 0, note: "Bài hát hay mà ông không được nghe thì chưa phải hiếu." },
        { text: "Ra hát một câu cho ông, rồi hỏi ông chuyện hồi nhỏ", score: 2, note: "Làm người già vui, đúng ý Lão Lai Tử." },
        { text: "Bật nhạc to cả nhà, không ngồi lại", score: 1, note: "Có tiếng vui, nhưng ông cần người ngồi cạnh hơn cần tiếng ồn." },
      ],
    },
  },
  {
    id: "mai",
    no: 8,
    name: "Đổng Vĩnh",
    title: "Lo tang cho cha",
    seal: "董",
    era: "Nhà Hán",
    story:
      "Cha mất, Đổng Vĩnh không có tiền lo tang. Ông phải đi làm thuê rất cực để cha được chôn cất đàng hoàng.\nChuyện kể có một cô gái xin cùng về giúp việc. Hết hạn, cô nói mình là người trời xuống giúp kẻ có hiếu, rồi đi mất.",
    y: "Nhớ cha mẹ, ông bà bằng lòng thành, không phải khoe mâm cỗ. Bé giúp việc nhỏ trong ngày giỗ.",
    viec: "Lau bàn sạch, xếp một bông hoa, hoặc hỏi mẹ một chuyện tốt của ông bà.",
    care: "Bé không bán đồ quý, không nhận việc nặng của người lớn. Việc tiền bạc để cha mẹ lo.",
    quiz: {
      ask: "Bé làm gì trong ngày giỗ là hợp chuyện Đổng Vĩnh?",
      choices: [
        "Giúp việc nhỏ và nhớ ông bà thật lòng",
        "Đòi mua đồ chơi vì hôm nay là ngày giỗ",
        "Bán cặp sách để có tiền",
      ],
      answer: 0,
      why: "Thành tâm là nhớ và phụ một tay. Bé không gánh việc tiền bạc.",
    },
    act: {
      where: "Ngày giỗ",
      title: "Khách chưa đến",
      story: "Mẹ đang lau bàn thờ, gọi mình bỏ đồ chơi giữa nhà. Phim đang hay.",
      choices: [
        { text: "Bảo đợi hết phim đã", score: 0, note: "Ngày giỗ, việc nhà đứng trước phim." },
        { text: "Tắt tạm, cất đồ, hỏi mẹ còn việc gì vừa sức", score: 2, note: "Phụ một tay là hiếu của bé trong ngày giỗ." },
        { text: "Đá đồ vào gầm ghế cho đỡ thấy", score: 1, note: "Hết vướng mắt, nhưng chưa thật sự giúp mẹ." },
      ],
    },
  },
  {
    id: "go",
    no: 9,
    name: "Đinh Lan",
    title: "Tạc tượng nhớ cha mẹ",
    seal: "木",
    era: "Nhà Hán",
    story:
      "Cha mẹ Đinh Lan mất sớm. Ông nhớ quá, tạc hai tượng gỗ giống cha mẹ, sớm tối thăm hỏi như khi còn sống.\nMột hôm vợ lấy kim châm tay tượng cho đùa. Chuyện kể tượng chảy máu. Ông buồn. Vợ hối hận, từ đó kính cẩn.",
    y: "Nhớ ông bà không phải làm màu. Giữ một nếp: kể chuyện, giữ ảnh sạch, thắp hương khi nhà có nếp ấy.",
    viec: "Hỏi mẹ một chuyện về ông bà, rồi kể lại cho em nghe.",
    quiz: {
      ask: "Đinh Lan làm tượng gỗ để làm gì?",
      choices: [
        "Nhớ cha mẹ và giữ lễ như khi các người ấy còn sống",
        "Để bán cho người qua đường",
        "Để dọa hàng xóm",
      ],
      answer: 0,
      why: "Tượng là cách ông nhớ. Bé nhớ bằng chuyện kể và bằng nếp nhà.",
    },
    act: {
      where: "Tường nhà",
      title: "Ảnh ông bà",
      story: "Em lấy bút vẽ lên khung ảnh ông bà vì thấy buồn cười. Mẹ chưa thấy.",
      choices: [
        { text: "Cười theo cho em vui", score: 0, note: "Ảnh người đã mất không phải chỗ đùa." },
        { text: "Nhẹ nhàng cất bút, lau nếu vừa sức, nói với mẹ", score: 2, note: "Giữ kính, không mắng em quá lời." },
        { text: "Giấu khung ảnh đi cho khỏi bị vẽ", score: 1, note: "Hết vẽ, nhưng giấu ảnh cũng là làm mất chỗ nhớ." },
      ],
    },
  },
  {
    id: "me",
    no: 10,
    name: "Giang Cách",
    title: "Làm thuê nuôi mẹ",
    seal: "母",
    era: "Nhà Hán",
    story:
      "Giang Cách mồ côi cha, đi làm thuê để nuôi mẹ. Gặp loạn, ông bị bắt. Ông khóc vì mẹ già không ai chăm, người ta tha ông.\nLần khác gặp cướp cũng vậy. Ông không bỏ mẹ để trốn một mình.",
    y: "Nhà đang khó thì mình không đòi quà. Ở cạnh mẹ, đỡ một việc nhỏ.",
    viec: "Tự xếp ba món đồ chơi về chỗ, khỏi để mẹ cúi nhặt.",
    quiz: {
      ask: "Giang Cách khóc khi bị bắt vì điều gì?",
      choices: [
        "Sợ mẹ già không có người chăm",
        "Sợ mất quần áo mới",
        "Muốn người ta cho vàng",
      ],
      answer: 0,
      why: "Ông nghĩ tới mẹ trước thân mình. Bé nghĩ tới mẹ bằng việc vừa sức.",
    },
    act: {
      where: "Siêu thị",
      title: "Kệ quà",
      story: "Mẹ nói tháng này nhà tiết kiệm. Mình thấy đồ chơi đẹp ngay tầm tay.",
      choices: [
        { text: "Nằm ra giữa lối đi đến khi mẹ mua", score: 0, note: "Làm mẹ khổ trước mặt người lạ không phải hiếu." },
        { text: "Cầm tay mẹ, nói con nhìn thôi, hôm nay không xin", score: 2, note: "Biết nhà khó mà không đòi. Mẹ nhẹ cả người." },
        { text: "Bỏ vào giỏ, bảo mẹ trả tiền sau", score: 1, note: "Vẫn là đòi, chỉ nói khéo hơn." },
      ],
    },
  },
  {
    id: "quyt",
    no: 11,
    name: "Lục Tích",
    title: "Giấu quýt cho mẹ",
    seal: "橘",
    era: "Nhà Hán",
    story:
      "Lục Tích sáu tuổi, theo cha đến nhà Viên Thuật. Chủ mời quýt. Bé giấu hai quả trong tay áo.\nLúc chào, quýt rơi xuống. Viên Thuật hỏi: sao khách mà giấu quả? Bé thưa: mẹ con thích quýt, con muốn mang về biếu mẹ.",
    y: "Nhớ phần của cha mẹ trước khi mình ăn hết. Xin phép rồi để dành, không lấy trộm.",
    viec: "Có bánh thì để một phần cho người lớn trong nhà trước khi ăn.",
    quiz: {
      ask: "Lục Tích giấu quýt vì sao?",
      choices: [
        "Để mang về cho mẹ",
        "Vì sợ quýt chua",
        "Để bạn khỏi thấy mình được ăn",
      ],
      answer: 0,
      why: "Sáu tuổi đã nhớ mẹ. Viên Thuật khen bé, không phạt, vì bé nói thật.",
    },
    act: {
      where: "Sinh nhật bạn",
      title: "Túi kẹo",
      story: "Bạn phát kẹo mang về. Mình thích ăn hết trên đường. Mẹ ở nhà đang đợi.",
      choices: [
        { text: "Ăn sạch trước cổng nhà", score: 0, note: "Ngon một mình, mẹ không được một viên." },
        { text: "Để lại ít viên, về khoe và mời mẹ trước", score: 2, note: "Đúng ý Lục Tích: phần ngon nhớ tới mẹ." },
        { text: "Giấu túi, nói dối là bạn không cho", score: 1, note: "Có để dành mà nói dối thì mất cái thật của chuyện." },
      ],
    },
  },
  {
    id: "com",
    no: 12,
    name: "Quách Cự",
    title: "Nhà nghèo, lo cho mẹ",
    seal: "郭",
    era: "Nhà Hán",
    story:
      "Nhà Quách Cự rất nghèo. Mẹ già hay nhường cơm cho cháu. Ông sợ mẹ đói.\nSách xưa kể một đoạn đáng sợ: ông từng nghĩ đến việc chôn con để còn cơm cho mẹ. Truyện kết bằng một vò vàng hiện ra, mẹ và con đều được sống.",
    y: "Ông bà cần được ăn no. Mình nhường miếng ngon. Không bao giờ làm hại em để lo cho người lớn.",
    viec: "Gắp hoặc để món mẹ thích vào chén mẹ trước.",
    care: "Bé không làm hại em, không giấu em đồ ăn để trả thù. Nhà khó thì nói với người lớn, chia phần, không giấu chuyện.",
    quiz: {
      ask: "Sổ này muốn bé học gì ở chuyện Quách Cự?",
      choices: [
        "Nhường cơm cho ông bà, và không bao giờ hại em",
        "Chôn em thì sẽ có vàng",
        "Giấu cơm cho mình ăn khuya",
      ],
      answer: 0,
      why: "Đoạn đáng sợ trong sách xưa không phải bài để bắt chước. Ý giữ lại là lo cho người già và giữ em an toàn.",
    },
    act: {
      where: "Bữa tối",
      title: "Hết thức ăn ngon",
      story: "Chỉ còn một ít thịt. Em với tay. Bà chưa được gắp.",
      choices: [
        { text: "Gạt tay em, ăn hết phần đó", score: 0, note: "Vừa không nhường bà, vừa làm em đau." },
        { text: "Mời bà trước, rồi chia với em phần còn lại", score: 2, note: "Lo người già mà vẫn thương em. Đúng bài của sổ này." },
        { text: "Đẩy đĩa sang em, bà đói cũng được", score: 1, note: "Thương em, nhưng quên đúng người chuyện muốn nhớ: bà." },
      ],
    },
  },
  {
    id: "quat",
    no: 13,
    name: "Hoàng Hương",
    title: "Quạt gối, ủ chăn",
    seal: "扇",
    era: "Nhà Hán",
    story:
      "Hoàng Hương mất mẹ lúc chín tuổi. Mùa hè, bé quạt gối cho cha mát rồi cha mới nằm.\nMùa đông, bé chui vào chăn trước cho ấm, rồi mới mời cha ngủ. Chín tuổi, việc nhỏ thôi, mà cha đỡ rét đỡ nóng.",
    y: "Để ý nóng lạnh của cha mẹ. Quạt, kéo màn, lấy áo. Không cần nằm ra sân cho giống chuyện.",
    viec: "Hỏi một câu: ba mẹ có lạnh không, rồi lấy chăn hoặc tắt quạt hộ.",
    care: "Không nằm ngoài trời lạnh, không trùm chăn kín đầu. Dễ ốm.",
    quiz: {
      ask: "Hoàng Hương mùa đông làm gì?",
      choices: [
        "Làm ấm chỗ ngủ cho cha trước",
        "Mở cửa cho gió vào cho cha khỏe",
        "Đi ngủ sớm, để cha tự lo",
      ],
      answer: 0,
      why: "Bé chín tuổi lo cái chăn cái gối. Đó là hiếu vừa sức.",
    },
    act: {
      where: "Đêm mát",
      title: "Quạt trần",
      story: "Mình thấy mát, thích quạt mạnh. Bà nằm gần, co chân, chưa nói gì.",
      choices: [
        { text: "Cứ để số cao vì mình đang nóng", score: 0, note: "Mình mát, bà lạnh. Chưa nhìn người nằm cạnh." },
        { text: "Hạ quạt hoặc lấy chăn đắp bụng bà, hỏi bà vừa chưa", score: 2, note: "Thấy nóng lạnh của người già, đúng việc Hoàng Hương." },
        { text: "Tắt quạt luôn, dù cả nhà đang đổ mồ hôi", score: 1, note: "Có nghĩ tới bà, nhưng làm cả nhà khó chịu thì chưa khéo." },
      ],
    },
  },
  {
    id: "dau",
    no: 14,
    name: "Thái Thuận",
    title: "Dâu ngọt để phần mẹ",
    seal: "桑",
    era: "Nhà Hán",
    story:
      "Thái Thuận mồ côi cha, hái dâu nuôi mẹ. Dâu đen, chín, ngọt, bé để riêng cho mẹ. Dâu đỏ, còn chua, bé để phần mình.\nQuan huyện thấy hai giỏ, hỏi. Bé thưa thật. Quan cảm động, thưởng gạo.",
    y: "Phần ngon nhường người lớn. Được hỏi thì nói thật, không bịa.",
    viec: "Chia đồ ăn, phần đẹp hơn đưa cho ông bà.",
    quiz: {
      ask: "Vì sao Thái Thuận để dâu đen riêng?",
      choices: [
        "Dâu ngọt dành cho mẹ",
        "Dâu đen xấu, bé không thích",
        "Bé muốn bán đắt hơn",
      ],
      answer: 0,
      why: "Hai giỏ là hai phần: ngon cho mẹ, chua cho mình. Nói thật nên được tin.",
    },
    act: {
      where: "Hộp bánh",
      title: "Cái bánh còn nguyên",
      story: "Hộp bánh có một cái còn nguyên và mấy mẩu vỡ. Ông chưa ăn tráng miệng.",
      choices: [
        { text: "Ăn cái nguyên, mẩu vỡ để ông", score: 0, note: "Ngược hẳn hai giỏ dâu." },
        { text: "Bưng cái nguyên cho ông, mình ăn mẩu vỡ vẫn ngọt", score: 2, note: "Nhường phần đẹp. Đúng Thái Thuận." },
        { text: "Giấu cái nguyên trong tủ, nói là hết bánh", score: 1, note: "Có để dành mà nói dối thì hỏng chuyện." },
      ],
    },
  },
  {
    id: "ca",
    no: 15,
    name: "Khương Thi",
    title: "Nước ngọt và cá chép",
    seal: "鯉",
    era: "Nhà Hán",
    story:
      "Khương Thi và vợ rất hiếu. Mẹ thích nước sông ở xa và thích ăn cá. Hai người ngày ngày đi gánh, không bỏ.\nChuyện kể rồi bên nhà có mạch nước ngọt, mỗi ngày hai con cá chép nhảy lên, như để đỡ công họ.",
    y: "Nhớ món cha mẹ thích và lo đều, không phải một lần cho có rồi quên.",
    viec: "Bưng một cốc nước bằng hai tay, chào rồi mới đưa.",
    quiz: {
      ask: "Khương Thi và vợ làm điều gì đều đặn?",
      choices: [
        "Đi lấy nước và lo cá mẹ thích, ngày nào cũng vậy",
        "Nấu cá một lần mỗi năm vào ngày Tết",
        "Bảo mẹ ra sông tự uống",
      ],
      answer: 0,
      why: "Hiếu ở đây là bền. Một hôm ngoan, mười hôm quên, thì chưa vào chuyện.",
    },
    act: {
      where: "Mỗi tối",
      title: "Cốc nước của ông",
      story: "Ông hay khát về đêm. Mình đã bưng nước hộ hai tối. Tối nay phim hay.",
      choices: [
        { text: "Bỏ luôn, hai tối là đủ kể", score: 0, note: "Hiếu một lúc không bằng hiếu đều." },
        { text: "Vẫn bưng, đặt gần tay ông, rồi mới xem", score: 2, note: "Việc nhỏ mà đều. Đúng nhà Khương Thi." },
        { text: "Nhờ em bưng hộ, mình không xem em có làm không", score: 1, note: "Có nhớ việc, nhưng giao rồi quên thì ông có thể vẫn khát." },
      ],
    },
  },
  {
    id: "sam",
    no: 16,
    name: "Vương Bầu",
    title: "Nghe sấm, ra ngồi với mẹ",
    seal: "雷",
    era: "Nhà Tấn",
    story:
      "Mẹ Vương Bầu sợ sấm. Khi mẹ còn, trời sắp mưa là ông ngồi cạnh.\nMẹ mất, mỗi lần nghe sấm ông ra mộ, nói nhỏ: con ở đây, mẹ đừng sợ.",
    y: "Nhớ điều cha mẹ, ông bà sợ và trấn an. Nhớ người đã mất bằng lòng, không phải làm màu.",
    viec: "Trời mưa to, nếu em sợ thì ngồi cạnh em. Nhớ một điều ông bà từng thích và kể lại.",
    quiz: {
      ask: "Vương Bầu ra mộ lúc có sấm để làm gì?",
      choices: [
        "Ở bên mẹ, vì mẹ lúc sống rất sợ sấm",
        "Để hứng mưa cho khỏe",
        "Để xin mưa cho ruộng nhà",
      ],
      answer: 0,
      why: "Ông nhớ đúng nỗi sợ của mẹ. Hiếu là nhớ điều riêng của người mình thương.",
    },
    act: {
      where: "Cơn mưa",
      title: "Em bịt tai",
      story: "Sấm rền. Em chạy vào, bịt tai, mắt đỏ. Mình cũng hơi sợ nhưng hơn em.",
      choices: [
        { text: "Cười em nhát, tiếp tục chơi", score: 0, note: "Em đang sợ. Cười là bỏ mặc." },
        { text: "Ngồi cạnh, nói nhỏ: anh ở đây, sấm xa rồi", score: 2, note: "Trấn an người sợ, đúng lòng Vương Bầu." },
        { text: "Bật nhạc to át sấm cho khỏi nghe", score: 1, note: "Có muốn giúp, nhưng tiếng to có khi làm em sợ hơn." },
      ],
    },
  },
  {
    id: "chao",
    no: 17,
    name: "Đường phu nhân",
    title: "Chăm bà không nề",
    seal: "唐",
    era: "Nhà Đường",
    story:
      "Bà nội nhà họ Thôi già, răng rụng, ăn cơm thường khó. Đường phu nhân, nàng dâu trong nhà, ngày ngày chăm cháo, không chê, không nhờ cho xong.\nBà khỏe hơn, gọi con cháu dặn: phải nhớ ơn người đã chăm bà.",
    y: "Ông bà yếu thì nói nhỏ, ăn chậm cùng, không chê mùi, không sốt ruột.",
    viec: "Bữa cơm ngồi đến khi ông bà ăn xong, không đứng dậy giữa chừng.",
    care: "Việc cho bú trong chuyện xưa là của người lớn. Bé thì bưng cháo, lau miệng, kể chuyện.",
    quiz: {
      ask: "Bé học được gì ở Đường phu nhân?",
      choices: [
        "Chăm người già đều đặn, không chê việc vướng",
        "Chỉ chăm khi có khách tới chơi",
        "Bảo ông bà tự lo cho nhanh",
      ],
      answer: 0,
      why: "Bà nhớ ơn vì được chăm mỗi ngày, không phải một lần cho có.",
    },
    act: {
      where: "Bữa cháo",
      title: "Bà ăn chậm",
      story: "Bà ăn chậm, hơi rơi. Bạn đang đợi mình ra cổng chơi.",
      choices: [
        { text: "Nhăn mặt, chạy đi, bảo bà ăn mãi", score: 0, note: "Bà buồn thì nát cả bữa. Chơi vẫn còn đó." },
        { text: "Ở thêm ít phút, lau nhẹ nếu mẹ nhờ, chào bà rồi hãy đi", score: 2, note: "Không nề, không sốt ruột. Bạn đợi thêm một chút được." },
        { text: "Đi chơi, nhờ em ngồi, em còn nhỏ hơn", score: 1, note: "Có nhớ việc, nhưng đẩy cho em nhỏ thì chưa phải mình làm." },
      ],
    },
  },
  {
    id: "mang",
    no: 18,
    name: "Mạnh Tông",
    title: "Măng mùa đông",
    seal: "筍",
    era: "Nhà Tam Quốc",
    story:
      "Mẹ Mạnh Tông ốm, thèm măng giữa mùa đông, rừng không có măng. Ông vào rừng trúc, khóc vì không tìm được.\nChuyện kể mặt đất nứt, măng mọc lên cho ông nấu canh dâng mẹ.",
    y: "Cha mẹ thèm một món mà không có, mình không hứa bừa. Hỏi người lớn, tìm món thay vừa sức.",
    viec: "Hỏi mẹ hôm nay mẹ muốn ăn gì, rồi nói với người nấu.",
    care: "Không đi rừng, không ra vườn một mình lúc tối. Nhờ người lớn dẫn.",
    quiz: {
      ask: "Mạnh Tông khóc trong rừng vì sao?",
      choices: [
        "Mẹ ốm thèm măng mà mùa đông không có",
        "Ông bị lạc đường đi chơi",
        "Ông giận mẹ đòi ăn",
      ],
      answer: 0,
      why: "Ông thương mẹ đến khóc. Bé không cần đi rừng. Bé hỏi và nhờ người lớn.",
    },
    act: {
      where: "Nhà bếp",
      title: "Bố thèm chè",
      story: "Bố về muộn, nói đùa: giá có chè đậu. Trong bếp hết đường. Mình muốn hứa chạy mua.",
      choices: [
        { text: "Một mình chạy ra cửa hàng bên đường", score: 0, note: "Ra đường một mình là nguy. Không làm." },
        { text: "Nói với mẹ: bố thèm chè, mình phụ lấy chén nếu nhà còn đồ", score: 2, note: "Nhớ món bố thích, nhờ người lớn, vừa sức." },
        { text: "Hứa mai mua, rồi quên luôn", score: 1, note: "Có nghe, nhưng hứa rồi quên làm bố chẳng được gì." },
      ],
    },
  },
  {
    id: "bang",
    no: 19,
    name: "Vương Tường",
    title: "Cá dưới lớp băng",
    seal: "冰",
    era: "Nhà Tấn",
    story:
      "Mẹ kế ốm, thèm cá. Trời rét, sông đóng băng. Vương Tường cởi áo nằm lên băng, mong băng tan để bắt cá.\nChuyện kể băng nứt, cá nhảy lên, ông mang về nấu cho mẹ.",
    y: "Ông thương mẹ đến quên cái rét của mình. Bé không nằm lên băng. Cách an toàn là nhờ người lớn, nấu món ấm.",
    viec: "Ngày lạnh, rót nước ấm cho người lớn và hỏi họ có cần áo khoác không.",
    care: "Nằm lên ao, hồ, sông đóng băng rất nguy hiểm, dễ thủng băng và đuối nước. Không được bắt chước.",
    quiz: {
      ask: "Bé làm theo phần nào của chuyện Vương Tường?",
      choices: [
        "Thương người ốm bằng việc ấm áp, an toàn",
        "Cởi áo nằm lên ao đóng băng",
        "Bắt cá một mình dưới mưa rét",
      ],
      answer: 0,
      why: "Giữ lòng thương, bỏ việc nguy hiểm. Nước ấm và cái chăn là hiếu của bé.",
    },
    act: {
      where: "Sáng lạnh",
      title: "Bà ho",
      story: "Sáng lạnh, bà ho. Mình thấy bà chỉ mặc áo mỏng. Ấm nước ở bàn, người lớn đang ở nhà.",
      choices: [
        { text: "Ra sân nằm xuống vũng nước cho giống chuyện", score: 0, note: "Nguy hiểm và không giúp bà hết ho." },
        { text: "Lấy áo khoác, nhờ người lớn rót nước ấm, ngồi nói nhỏ với bà", score: 2, note: "Ấm và an toàn. Đúng bài hôm nay." },
        { text: "Bảo bà tự lấy áo, mình đi đánh răng đã", score: 1, note: "Không nguy, nhưng thấy bà lạnh mà bỏ đi thì chưa tới." },
      ],
    },
  },
  {
    id: "ho",
    no: 20,
    name: "Dương Hương",
    title: "Không bỏ cha lúc nguy",
    seal: "虎",
    era: "Nhà Tấn",
    story:
      "Dương Hương còn nhỏ, đi với cha. Hổ vồ cha. Cô không chạy một mình. Cô lao tới, ôm lấy hổ, quyết không để hổ tha cha. Hổ buông. Cha được cứu.\nChuyện xưa khen lòng không bỏ cha. Cách của bé hôm nay khác.",
    y: "Không bỏ người thân lúc nguy. Nhưng bé không đánh nhau với thú dữ. Việc của bé là hô to và chạy gọi người lớn.",
    viec: "Học một cách gọi cứu của nhà: tên mẹ, số nhà, hoặc chạy sang nhà hàng xóm mình tin.",
    care: "Gặp chó dữ, nước sâu, người lạ kéo đi: không lao vào. Hô to, chạy về phía đông người, tìm người lớn tin được.",
    quiz: {
      ask: "Nếu thấy nguy hiểm, bé làm gì cho đúng bài này?",
      choices: [
        "Hô to và chạy gọi người lớn, không bỏ mặc",
        "Ôm cổ thú dữ như trong chuyện xưa",
        "Bỏ chạy một mình, không kêu ai",
      ],
      answer: 0,
      why: "Lòng không bỏ cha thì giữ. Cách đánh hổ thì không bắt chước. Kêu cứu là đúng.",
    },
    act: {
      where: "Công viên",
      title: "Chó thả rông",
      story: "Chó lạ chạy tới, sủa. Em đứng khựng. Người lớn nhà mình ở phía ghế xa.",
      choices: [
        { text: "Xông tới đá con chó", score: 0, note: "Dễ bị cắn. Không phải cách của bé." },
        { text: "Nắm tay em, lùi chậm, gọi to người lớn trong nhà", score: 2, note: "Không bỏ em, không đánh con vật. Đúng." },
        { text: "Chạy một mình về ghế, để em đó", score: 1, note: "Mình thoát, em vẫn nguy. Chưa phải không bỏ người thân." },
      ],
    },
  },
  {
    id: "muoi",
    no: 21,
    name: "Ngô Mãnh",
    title: "Nghĩ tới muỗi trước cha mẹ",
    seal: "蚊",
    era: "Nhà Tấn",
    story:
      "Nhà Ngô Mãnh nghèo, không có màn. Muỗi nhiều. Bé nằm trần, không xua, để muỗi đốt no mình, sợ muỗi bay sang đốt cha mẹ.\nLòng thì thương cha mẹ. Cách thì nay mình không làm.",
    y: "Nghĩ cho cha mẹ trước mình, nhưng bằng cách khôn: kéo màn, bật quạt, xin người lớn thuốc chống muỗi cho cả nhà.",
    viec: "Tối nay hỏi một câu: màn đã kéo chưa?",
    care: "Đừng để muỗi đốt. Dễ sốt, dễ bệnh. Không bắt chước nằm cho muỗi đốt.",
    quiz: {
      ask: "Cách nào giữ được ý Ngô Mãnh mà vẫn an toàn?",
      choices: [
        "Kéo màn và xin kem chống muỗi cho cả nhà",
        "Nằm trần cho muỗi đốt no",
        "Xua muỗi hết sang phòng cha mẹ",
      ],
      answer: 0,
      why: "Ý là nghĩ tới cha mẹ trước. Cách xưa làm mình bệnh. Màn và quạt là cách của bé.",
    },
    act: {
      where: "Phòng ngủ",
      title: "Muỗi vo ve",
      story: "Tối, muỗi vo ve. Mẹ đang ru em ở giường cạnh. Màn nhà mình chưa kéo.",
      choices: [
        { text: "Nằm yên cho muỗi đốt để khỏi sang mẹ", score: 0, note: "Bé có thể sốt. Mẹ không muốn vậy." },
        { text: "Kéo màn giường mẹ và giường mình, nói nhỏ cho mẹ biết", score: 2, note: "Che cho cả nhà. Đúng bài hôm nay." },
        { text: "Đập muỗi thật mạnh, đèn sáng, em tỉnh khóc", score: 1, note: "Có muốn diệt muỗi, nhưng làm em giật mình thì mẹ thêm mệt." },
      ],
    },
  },
  {
    id: "benh",
    no: 22,
    name: "Dữu Kiềm Lâu",
    title: "Nghe cha ốm là về",
    seal: "憂",
    era: "Nhà Nam Bắc triều",
    story:
      "Dữu Kiềm Lâu đang làm quan ở xa. Nghe cha ốm nặng, ông xin về ngay, ngày đêm ngồi cạnh giường, không đi chơi.\nSách xưa còn một việc quá khó nghe để xem bệnh. Sổ này không kể. Bài cho bé chỉ một ý: khi cha mẹ ốm, ở bên.",
    y: "Cha mẹ ốm thì nói nhỏ, mang khăn, không bật tiếng to. Nặng hơn thì gọi người lớn. Rửa tay.",
    viec: "Nếu ai trong nhà ốm, tắt bớt tiếng và hỏi họ có cần nước không.",
    care: "Không nếm, không ngửi thứ gì từ người ốm. Việc ấy không phải của bé và dễ bệnh.",
    quiz: {
      ask: "Bé giữ điều gì trong chuyện Dữu Kiềm Lâu?",
      choices: [
        "Ở bên khi người nhà ốm, gọi người lớn nếu nặng",
        "Làm đúng việc khó nghe trong sách xưa",
        "Đi chơi cho cha mẹ được yên vì khỏi thấy mặt",
      ],
      answer: 0,
      why: "Ở bên là đủ. Việc sổ không kể thì không hỏi thêm và không làm.",
    },
    act: {
      where: "Buổi trưa",
      title: "Bố nằm",
      story: "Bố đau đầu, kéo rèm. Mình muốn gọi bạn vào nhà chơi trò mới.",
      choices: [
        { text: "Rủ bạn vào, chơi to ở phòng khách", score: 0, note: "Bố đang cần yên. Chơi dồn ra ngoài hoặc hôm khác." },
        { text: "Nói bạn hôm nay thôi, rót nước để ngoài cửa phòng bố", score: 2, note: "Ở bên bằng sự yên lặng. Đúng." },
        { text: "Chơi nhỏ trong phòng mình, cửa mở, tiếng vẫn sang", score: 1, note: "Có nhịn phần nào, nhưng chưa thật yên cho người ốm." },
      ],
    },
  },
  {
    id: "rua",
    no: 23,
    name: "Hoàng Đình Kiên",
    title: "Quan lớn vẫn tự rửa",
    seal: "洗",
    era: "Nhà Tống",
    story:
      "Hoàng Đình Kiên là quan, chữ đẹp, nhiều người phục. Mẹ già. Mỗi ngày ông vẫn tự tay rửa thau, rửa bô cho mẹ, không giao hết cho người giúp.\nÔng nói: việc của con, con không nhờ người khác cho xong.",
    y: "Việc hơi bẩn cho cha mẹ cũng là việc của mình: đổ rác, lau sàn, giặt tất, xếp giày.",
    viec: "Làm một việc mình hay lười: đổ rác hoặc xếp giày ngay ngắn.",
    quiz: {
      ask: "Hoàng Đình Kiên đã làm quan, vì sao vẫn tự rửa đồ cho mẹ?",
      choices: [
        "Ông cho đó là việc của con, không đẩy cho người khác",
        "Vì nhà hết tiền thuê người",
        "Vì ông thích mùi đó",
      ],
      answer: 0,
      why: "Giỏi và sang không miễn việc nhà. Bé cũng không chê việc bẩn vừa sức.",
    },
    act: {
      where: "Góc cửa",
      title: "Giày đầy nhà",
      story: "Giày cả nhà đổ ở cửa. Mẹ bưng đồ, sắp vấp. Mình vừa ngồi xuống ghế.",
      choices: [
        { text: "Co chân lên, bảo em xếp vì em nhỏ hơn", score: 0, note: "Thấy mẹ vấp mà ngồi im là trái chuyện." },
        { text: "Đứng lên xếp giày thành hàng, kéo thảm cho khỏi trượt", score: 2, note: "Việc nhỏ, hơi bẩn tay, đúng của mình." },
        { text: "Đá giày vào một góc cho đỡ vướng lối", score: 1, note: "Hết vấp tạm, nhưng góc ấy lát mẹ lại phải nhặt." },
      ],
    },
  },
  {
    id: "tim",
    no: 24,
    name: "Chu Thọ Xương",
    title: "Bỏ quan đi tìm mẹ",
    seal: "尋",
    era: "Nhà Tống",
    story:
      "Chu Thọ Xương mồ côi mẹ từ nhỏ, mẹ bị thất lạc. Lớn lên ông làm quan, nhưng bỏ chức, đi tìm mẹ rất nhiều năm.\nCuối cùng ông gặp mẹ lúc bà đã già. Ông khóc, đưa mẹ về phụng dưỡng.",
    y: "Đừng để người thân lạc vì mình không nhắn. Đi đâu phải cho cha mẹ biết mình ở đâu.",
    viec: "Thuộc số điện thoại của mẹ, hoặc biết nhà mình số mấy, ngõ nào.",
    quiz: {
      ask: "Chu Thọ Xương bỏ chức quan để làm gì?",
      choices: [
        "Đi tìm mẹ thất lạc nhiều năm",
        "Đi chơi cho khỏi chán việc quan",
        "Tránh không muốn nuôi mẹ",
      ],
      answer: 0,
      why: "Chức quan không quý bằng gặp lại mẹ. Bé thì đừng để mẹ phải đi tìm mình.",
    },
    act: {
      where: "Tan học",
      title: "Rủ qua nhà bạn",
      story: "Tan học, bạn rủ qua nhà chơi luôn. Mẹ đang đợi ở cổng trường như mọi ngày.",
      choices: [
        { text: "Đi theo bạn, mẹ biết đường về", score: 0, note: "Mẹ sẽ tưởng lạc. Đúng nỗi chuyện này muốn tránh." },
        { text: "Ra cổng gặp mẹ trước, xin phép, nói rõ nhà bạn và giờ về", score: 2, note: "Đi đâu mẹ cũng biết. Đó là hiếu của bé." },
        { text: "Nhắn qua một bạn khác, không chắc bạn ấy gặp mẹ", score: 1, note: "Có định nhắn, nhưng nhờ người không chắc thì mẹ vẫn lo." },
      ],
    },
  },
];

const byId = new Map(TALES.map((tale) => [tale.id, tale]));

export function taleById(id: string): Tale | undefined {
  return byId.get(id);
}

export function taleOfDay(date = new Date()): Tale {
  const start = Date.UTC(date.getFullYear(), 0, 0);
  const day = Math.floor((date.getTime() - start) / 86400000);
  return TALES[((day % TALES.length) + TALES.length) % TALES.length]!;
}

export function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = next[i]!;
    next[i] = next[j]!;
    next[j] = swap;
  }
  return next;
}

export function sample<T>(items: readonly T[], count: number): T[] {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

export function speakText(tale: Tale): string {
  return `${tale.name}. ${tale.title}. ${tale.story.replaceAll("\n", " ")} Ý cho bé: ${tale.y}`;
}

// Single source of truth for all site copy. Edit here; every page reads from this file.
// NOTE: Home / Beliefs / Team copy is drawn from the current sdreformed.com pages.
//       Events copy is placeholder structure — replace with your real calendar.

export interface Social {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  logo: string;
  tagline: string[];
  address: string;
  serviceTime: string;
  mapUrl: string;
  confessionUrl: string;
  socials: Social[];
}

export const site: SiteConfig = {
  name: "San Diego Reformed Church",
  shortName: "SDRC",
  logo: "/img/SDRC_Logo-black.png",
  tagline: ["Ecclesia Reformata", "Semper Reformanda"],
  address: "5150 Jackson Dr., La Mesa, CA 91942",
  serviceTime: "9:30 a.m.",
  mapUrl: "https://maps.app.goo.gl/rFPFic9eGdvG6dp69",
  confessionUrl: "https://founders.org/library/1689-confession/",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/sdreformed" },
    { label: "X / Twitter", href: "https://twitter.com/theresponsesd" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCQ3Sk7nWpJKZigMPnfsvvEQ" },
    { label: "Vimeo", href: "https://vimeo.com/sdreformed" },
    { label: "Instagram", href: "https://www.instagram.com/sdreformed" },
  ],
};

export interface NavChild {
  label: string;
  to?: string;
  href?: string;
}

export interface NavItem {
  label: string;
  to?: string;
  href?: string;
  children?: NavChild[];
}

// Nav mirrors the current site's dropdown structure. `to` = internal route; `href` = external.
export const nav: NavItem[] = [
  {
    label: "About",
    children: [
      { label: "Our Team", to: "/team" },
      { label: "Our Beliefs", to: "/beliefs" },
    ],
  },
  {
    label: "Fellowship",
    children: [
      { label: "Events", to: "/events" },
      { label: "Coffee With The Pastors", to: "/coffee" },
      { label: "Membership", to: "/membership" },
      { label: "Ministry of Men", to: "/men" },
      { label: "Ministry of Women", to: "/women" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Sermons", to: "/sermons" },
      { label: "The SDRC App", to: "/app" },
      { label: "Articles", to: "/articles" },
      { label: "Book List", to: "/books" },
    ],
  },
  { label: "Give", to: "/give" },
];

export interface FooterLink {
  label: string;
  to?: string;
  href?: string;
}

export const footerLinks: FooterLink[] = [
  { label: "About", to: "/beliefs" },
  { label: "Events", to: "/events" },
  { label: "Articles", to: "/articles" },
  { label: "Book List", to: "/books" },
  { label: "Sermons", to: "/sermons" },
  { label: "Give", to: "/give" },
];

export const home = {
  hero: {
    kicker: "Ecclesia Reformata · Semper Reformanda",
    title: "To make and mature disciples who live all of life according to the Scriptures, for the glory of Christ our King.",
    lede: "A confessional, Reformed Baptist church in La Mesa. We welcome you to join us this Lord's Day at 9:30 a.m.",
  },
  confession: {
    kicker: "Our Statement of Faith",
    title: "The Second London Baptist Confession of 1689",
    body: "San Diego Reformed Church holds without reservation to the 1689 Baptist Confession of Faith — not as a book above the Bible, but as a faithful summary of the whole counsel of God as we understand the Scriptures to teach it.",
  },
  service: {
    kicker: "Sunday Service",
    title: "Come and worship with us",
    body: "We welcome you to join us this Sunday at 9:30 a.m. Come as you are — you will find warm fellowship and the faithful preaching of God's Word.",
  },
  sermons: {
    kicker: "Sermons",
    title: "Sit under the Word",
    body: "We pray that the grace the Lord provides our congregation every Lord's Day would overflow to bless you and your home. We have made our sermons available online — use them as a supplement to your walk, and not as a replacement for the local preaching ministry the Lord has called you to sit under.",
    href: "https://sdreformed.com/sunday-sermons/",
    // Replace with your latest sermon video (YouTube or Vimeo embed URL).
    featuredEmbed: "https://player.vimeo.com/video/807296891?h=2b5155ce18&badge=0&autopause=0&player_id=0&app_id=58479",
    featuredTitle: "Most Recent Lord's Day Sermon",
  },
  membership: {
    kicker: "Membership",
    title: "Belong to the body",
    body: "Membership at SDRC is about making your commitment to Christ and his people visible through covenanting to the local church. There are many ways to get involved — begin with the next Coffee With The Pastors.",
    href: "https://sdreformed.com/membership/",
  },
};

export const vision = {
  statement: "San Diego Reformed Church exists to make and mature disciples who live all of life according to the Scriptures, for the glory of Christ our King.",
  pillars: [
    {
      title: "The Authority of the Word",
      body: "We do not bow down to any other books, gods, popes, or popular opinion. We build off the foundation of the apostles and prophets, never altering this firm foundation, of which Christ Jesus is the cornerstone. We preach Christ crucified and the only Gospel, which is in accordance with the Scriptures. We submit joyously to the full counsel of God revealed to us in His Word, now and forever.",
    },
    {
      title: "The Kingship of Christ",
      body: "All authority in heaven and on earth has been granted to Jesus Christ. He is the King of kings and Lord of lords. Therefore, we submit, serve, and sacrifice for him in all things. We proclaim his Kingship to kings and beggars, that all might hear of the King's life, death, resurrection, and return — that all might joyously bow their knees and confess with their tongues that Jesus Christ is King, now and forever.",
    },
  ],
};

export const beliefs = {
  intro: "San Diego Reformed Church is a bible-believing, bible-preaching, and bible-cherishing church. We cherish the Bible because we cherish God — and to say plainly what we understand it to teach, we confess the historic Christian faith with the wider church.",
  confessionNote: "To that end we hold without reservation to the Second London Baptist Confession of Faith of 1689. It is our confession not because it stands above Scripture, but because it is a faithful and thorough summary of the whole counsel of God revealed in His Word.",
  chapters: [
    "Of the Holy Scriptures", "Of God and of the Holy Trinity", "Of God's Decree", "Of Creation",
    "Of Divine Providence", "Of the Fall of Man, of Sin, and of the Punishment thereof", "Of God's Covenant",
    "Of Christ the Mediator", "Of Free Will", "Of Effectual Calling", "Of Justification", "Of Adoption",
    "Of Sanctification", "Of Saving Faith", "Of Repentance unto Life and Salvation", "Of Good Works",
    "Of the Perseverance of the Saints", "Of the Assurance of Grace and Salvation", "Of the Law of God",
    "Of the Gospel, and of the Extent of the Grace thereof", "Of Christian Liberty and Liberty of Conscience",
    "Of Religious Worship and the Sabbath Day", "Of Lawful Oaths and Vows", "Of the Civil Magistrate",
    "Of Marriage", "Of the Church", "Of the Communion of Saints", "Of Baptism and the Lord's Supper",
    "Of Baptism", "Of the Lord's Supper", "Of the State of Man after Death, and of the Resurrection of the Dead",
    "Of the Last Judgment",
  ],
  doctrinesOfGrace: {
    intro: "With the Reformed church throughout the ages, we hold to the doctrines of grace — that salvation is the work of God from first to last, to the praise of the glory of His grace.",
    points: [
      { term: "Total Depravity", body: "Man is by nature dead in trespasses and sins, unable and unwilling to come to God apart from grace." },
      { term: "Unconditional Election", body: "God, before the foundation of the world, chose a people for Himself, not on the basis of anything foreseen in them, but according to the good pleasure of His will." },
      { term: "Particular Redemption", body: "Christ laid down His life for His sheep, actually securing the salvation of all whom the Father gave to Him." },
      { term: "Effectual Grace", body: "The Spirit sovereignly and graciously calls the elect, granting them repentance and faith, and no one so called can finally resist." },
      { term: "Perseverance of the Saints", body: "Those whom God effectually calls and sanctifies He also keeps; they will persevere to the end and be saved." },
    ],
  },
  quote: {
    text: "We submit joyously to the full counsel of God revealed to us in His Word, now and forever.",
    source: "From our vision, San Diego Reformed Church",
  },
};

export interface Person {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface TeamGroup {
  title: string;
  note: string;
  people: Person[];
}

export const team: { intro: string; groups: TeamGroup[] } = {
  intro: "The Lord has appointed elders to shepherd His flock and deacons to serve it. These are the men who serve San Diego Reformed Church.",
  groups: [
    {
      title: "Elders",
      note: "The elders are charged with shepherding, teaching, and overseeing the congregation.",
      people: [
        { name: "Zack Gilman", role: "Lead Pastor", photo: "/img/PastorZackGilman.jpeg", bio: "Zack is primarily responsible for preaching and vision at SDRC." },
        { name: "Sean Kinnally", role: "Associate Pastor", photo: "/img/PastorSeanKinnally.jpeg", bio: "Sean is responsible for ministering the word in preaching and counseling at SDRC." },
        { name: "Rony Renfrow III", role: "Lay Elder", photo: "/img/PastorRonyRenfrow.jpeg", bio: "Rony is responsible for the liturgy and executive duties at SDRC." },
        { name: "Jacob Merkey", role: "Lay Elder", photo: "/img/PastorJacobMerkey.jpeg", bio: "Jacob is responsible for the liturgy and counseling duties at SDRC." },
        { name: "Jonathan Lamb", role: "Lay Elder", photo: "/img/PastorJonathanLamb.jpeg", bio: "Jonathan is responsible for the liturgy and financial and administration duties at SDRC." },
      ],
    },
    {
      title: "Deacons",
      note: "The deacons attend to the practical and mercy needs of the body so the elders may devote themselves to the Word.",
      people: [
        { name: "Richard Higgins", role: "Deacon", photo: "/img/DeaconRichardHiggins.jpeg", bio: "Richard serves the congregation as a deacon, attending to the practical needs of the body." },
        { name: "Paul Stevens", role: "Deacon", photo: "/img/DeaconPaulStevens.jpg", bio: "Paul serves the congregation as a deacon, attending to the practical needs of the body." },
      ],
    },
  ],
};

export const events = {
  intro: "There are many ways to gather at San Diego Reformed Church — for worship on the Lord's Day and for fellowship throughout the week. Below is a rhythm of our regular gatherings.",
};

export const coffee = {
  intro: "Coffee With The Pastors is a great first step for anyone who is new to the church and wants to receive more information. This time is informal and simply serves as an opportunity for you to get to know the pastors of the church as well as hear about the church's history, beliefs, and vision.",
  contact: "elders@sdreformed.com",
};

export interface MembershipStep {
  number: number;
  title: string;
  body: string;
}

export const membership = {
  intro: "At San Diego Reformed Church we hold membership in high regard. All members are disciples of Jesus, unified by their identity in Christ. Being a member of SDRC is about making our commitment to Christ and his people visible through covenanting to the local church. This unity is expressed in the way we collaborate in loving God, loving fellow believers, and loving our neighbors in the culture around us.",
  steps: [
    {
      number: 1,
      title: "Membership Interest Class",
      body: "All individuals who desire to become members are required to attend our Membership Interest Class. Please note, childcare will not be provided — we encourage you to seek other accommodations for your children.",
    },
    {
      number: 2,
      title: "Interview with an Elder",
      body: "After completing the class, individuals are required to participate in a Membership Interview with one of our Elders.",
    },
    {
      number: 3,
      title: "Presented as Member Candidate",
      body: "Once an individual has attended the Membership Interest Class and completed their Membership Interview, they will be invited to attend our next monthly Members' Meeting to be presented as a 'Member Candidate.' This provides our current Members with the opportunity to observe these Member Candidates' life and doctrine.",
    },
    {
      number: 4,
      title: "Received as Full Member",
      body: "Once an individual has been presented as a Member Candidate, they will be ready to be received as a 'Full Member' after one month by the 'silent consent' of the current Membership, assuming no concerns were brought forward during the Membership Candidacy.",
    },
    {
      number: 5,
      title: "Get Baptized",
      body: "Once an individual has been welcomed into Full Membership, they will be expected to be baptized if they have not been already.",
    },
    {
      number: 6,
      title: "Sign the Membership Covenant",
      body: "Lastly, upon the completion of all the previous steps, individuals will be required to sign our Membership Covenant.",
    },
  ] satisfies MembershipStep[],
  covenantUrl: "https://drive.google.com/file/d/1NOG3ckC_WlocYW_ngy5YlLbOrbkYclxY/view?usp=sharing",
  constitutionUrl: "https://drive.google.com/file/d/1bMn4vidjTki-x4blequ4_80PubNlVxg2/view?usp=sharing",
};

export const men = {
  subtitle: "The Brotherhood",
  intro: "The men of San Diego Reformed Church gather together every other month for a short teaching from God's word, group discussion, and time to develop friendships in the church.",
  contact: "elders@sdreformed.com",
};

export const women = {
  subtitle: "Imperishable Beauty",
  intro: "A ministry for women, of women, seeking to obey our great God from His word in Titus 2 and 1 Peter 3. Childcare is not provided. Children are permissible and parents should follow the form and function of our Sunday Morning services.",
  contact: "elders@sdreformed.com",
};

export const sermons = {
  intro: "We pray that the grace the Lord provides our congregation every Lord's Day would overflow to bless you and your home. We have made our sermons available online — use them as a supplement to your walk, and not as a replacement for the local preaching ministry the Lord has called you to sit under.",
  vimeoChannelUrl: "https://vimeo.com/sdreformed",
  youtubeChannelUrl: "https://www.youtube.com/channel/UCQ3Sk7nWpJKZigMPnfsvvEQ",
  featuredEmbed: "https://player.vimeo.com/video/807296891?h=2b5155ce18&badge=0&autopause=0&player_id=0&app_id=58479",
  featuredTitle: "Most Recent Lord's Day Sermon",
};

export const sdrcApp = {
  intro: "The SDRC app — powered by Subsplash — brings sermons, events, giving, and more to your phone. Download it today and stay connected to the life and ministry of San Diego Reformed Church.",
  subsplashUrl: "https://subsplash.com/u/-N98T3J",
};

export const articles = {
  intro: "The pastors and members of San Diego Reformed Church write on theology, culture, the Christian life, and more. Browse all articles on our blog.",
  externalUrl: "https://sdreformed.com/blog-2/",
};

export const give = {
  intro: "San Diego Reformed Church is supported entirely by the faithful giving of our congregation and friends. All gifts go directly toward the ministry, benevolence, and operations of the church.",
  subsplashUrl: "https://subsplash.com/u/-N98T3J/give",
};

export interface BookEntry {
  title: string;
  href: string;
}

export interface BookCategory {
  category: string;
  books: BookEntry[];
}

export const bookList: BookCategory[] = [
  {
    category: "Christian Living",
    books: [
      { title: "Pilgrim's Progress — John Bunyan", href: "https://smile.amazon.com/Pilgrims-Progress-Unabridged-Original-Version/dp/154881606X" },
      { title: "The Gospel Centered Life — Robert Thune", href: "https://smile.amazon.com/Gospel-Centered-Life-Study-Guide-Leaders/dp/1942572913" },
      { title: "You Can Change — Tim Chester", href: "https://smile.amazon.com/You-Can-Change-Transforming-Behavior/dp/1433512319" },
      { title: "The Mortification of Sin — John Owen", href: "https://smile.amazon.com/Mortification-Sin-Puritan-Paperbacks/dp/0851513824" },
    ],
  },
  {
    category: "Manhood",
    books: [
      { title: "The Masculine Mandate — Richard D. Phillips", href: "https://smile.amazon.com/Masculine-Mandate-Richard-D-Phillips/dp/1567696848" },
      { title: "Fidelity — Doug Wilson", href: "https://smile.amazon.com/Fidelity-How-Be-One-Woman-Man-dp-1591281210/dp/1591281210" },
      { title: "The Godly Man's Picture — Thomas Watson", href: "https://smile.amazon.com/Godly-Mans-Picture-Puritan-Paperbacks/dp/0851515959" },
    ],
  },
  {
    category: "Womanhood",
    books: [
      { title: "The Fruit of Her Hands — Nancy Wilson", href: "https://smile.amazon.com/Fruit-Her-Hands-Respect-Christian/dp/188576734X" },
      { title: "Praise Her in the Gates — Nancy Wilson", href: "https://smile.amazon.com/Praise-Her-Gates-Christian-Motherhood/dp/1885767706" },
      { title: "You Who — Rachel Jankovic", href: "https://smile.amazon.com/You-Who-Why-Matter-Deal/dp/1947644882" },
    ],
  },
  {
    category: "Singleness",
    books: [
      { title: "Redeeming Singleness — Barry Danylak", href: "https://smile.amazon.com/Redeeming-Singleness-Storyline-Scripture-Affirms/dp/1433505886" },
    ],
  },
  {
    category: "Engagement",
    books: [
      { title: "Preparing for Marriage — John Piper", href: "https://smile.amazon.com/Preparing-Marriage-Christian-Couples-Expanded/dp/194111458X" },
    ],
  },
  {
    category: "Marriage",
    books: [
      { title: "Reforming Marriage — Doug Wilson", href: "https://smile.amazon.com/Reforming-Marriage-Douglas-Wilson/dp/1885767455" },
      { title: "Gospel-Centered Marriage — Tim Chester", href: "https://www.amazon.com/Gospel-Centered-Marriage-Tim-Chester/dp/1908317582" },
      { title: "This Momentary Marriage — John Piper", href: "https://smile.amazon.com/This-Momentary-Marriage-Parable-Permanence/dp/1433531119" },
    ],
  },
  {
    category: "Family & Parenting",
    books: [
      { title: "Why Children Matter — Doug Wilson", href: "https://smile.amazon.com/Why-Children-Matter-Douglas-Wilson/dp/1947644424" },
      { title: "Shepherding a Child's Heart — Tedd Tripp", href: "https://smile.amazon.com/Shepherding-Childs-Heart-Tedd-Tripp/dp/0966378601" },
      { title: "Parenting — Paul David Tripp", href: "https://smile.amazon.com/Parenting-Gospel-Principles-Radically-Change/dp/1433551934" },
    ],
  },
  {
    category: "Children's Books",
    books: [
      { title: "Chronicles of Narnia — C.S. Lewis", href: "https://smile.amazon.com/Chronicles-Narnia-C-S-Lewis/dp/0066238501" },
      { title: "The Hobbit — J.R.R. Tolkien", href: "https://smile.amazon.com/Hobbit-J-R-R-Tolkien/dp/0547953836" },
      { title: "The 100 Cupboards Series — N.D. Wilson", href: "https://smile.amazon.com/100-Cupboards-Bk/dp/0375838821" },
    ],
  },
  {
    category: "Calvinism",
    books: [
      { title: "Potter's Freedom — James White", href: "https://smile.amazon.com/Potters-Freedom-Reformation-Rebuttal-Geislers/dp/1879737434" },
      { title: "Chosen by God — R.C. Sproul", href: "https://smile.amazon.com/Chosen-God-R-C-Sproul/dp/0842313354" },
      { title: "Five Points — John Piper", href: "https://smile.amazon.com/Five-Points-Towards-Deeper-Experience/dp/1781912521" },
    ],
  },
  {
    category: "Covenant Theology",
    books: [
      { title: "The Distinctiveness of Baptist Covenant Theology — Pascal Denault", href: "https://smile.amazon.com/Distinctiveness-Baptist-Covenant-Theology-Seventeenth-Century-ebook/dp/B00QZNH38S" },
      { title: "Covenant Theology: From Adam to Christ — Nehemiah Coxe", href: "https://smile.amazon.com/Covenant-Theology-Christ-Nehemiah-Coxe-ebook/dp/B00YCX8I96" },
      { title: "Divine Covenants — A.W. Pink", href: "https://smile.amazon.com/Divine-Covenants-Arthur-W-Pink/dp/1612030815" },
    ],
  },
  {
    category: "Creeds, Confessions & Catechisms",
    books: [
      { title: "1689 2nd London Baptist Confession", href: "https://founders.org/library/1689-confession/" },
      { title: "The Baptist Catechism (Keach's Catechism) — Benjamin Keach", href: "https://smile.amazon.com/Baptist-Confession-Faith-Catechism/dp/1599253461" },
    ],
  },
  {
    category: "Church History",
    books: [
      { title: "Historical Theology — William Cunningham", href: "https://smile.amazon.com/Historical-Theology-Principal-Doctrinal-Discussions/dp/1173735917" },
      { title: "Foundations of Grace — Steve Lawson", href: "https://smile.amazon.com/Foundations-Grace-Long-Godly-Profile/dp/1567696856" },
      { title: "The Reformers and the Theology of the Reformation — William Cunningham", href: "https://smile.amazon.com/Reformers-Theology-Reformation-William-Cunningham/dp/1377529568" },
    ],
  },
  {
    category: "Church Membership & Congregationalism",
    books: [
      { title: "Nine Marks of a Healthy Church — Mark Dever", href: "https://smile.amazon.com/Nine-Marks-Healthy-Church-9Marks/dp/1433539985" },
      { title: "Don't Fire Your Church Members — Jonathan Leeman", href: "https://smile.amazon.com/Dont-Fire-Church-Members-Congregationalism/dp/1433686236" },
      { title: "Church Membership — Jonathan Leeman", href: "https://smile.amazon.com/Church-Membership-Represents-Building-Churches/dp/1433532379" },
    ],
  },
  {
    category: "Baptism",
    books: [
      { title: "Understanding Baptism — Bobby Jamieson", href: "https://smile.amazon.com/Understanding-Baptism-Church-Basics-Jamieson/dp/1433688875" },
    ],
  },
  {
    category: "Elders & Deacons",
    books: [
      { title: "Biblical Eldership — Alexander Strauch", href: "https://smile.amazon.com/Biblical-Eldership-Urgent-Restore-Leadership/dp/0936083115" },
      { title: "The Reformed Pastor — Richard Baxter", href: "https://smile.amazon.com/Reformed-Pastor-Richard-Baxter/dp/1479239720" },
      { title: "Church Elders — Jeramie Rinne", href: "https://smile.amazon.com/Church-Elders-Shepherd-Building-Churches/dp/1433540878" },
    ],
  },
  {
    category: "Preaching",
    books: [
      { title: "The Supremacy of God in Preaching — John Piper", href: "https://smile.amazon.com/Supremacy-God-Preaching-John-Piper/dp/0801017084" },
      { title: "Preaching & Preachers — Martyn Lloyd-Jones", href: "https://smile.amazon.com/Preaching-Preachers-David-Martyn-Lloyd-Jones/dp/1444750283" },
      { title: "Lectures to My Students — Charles Spurgeon", href: "https://smile.amazon.com/Lectures-My-Students-Charles-Spurgeon/dp/1503122336" },
    ],
  },
  {
    category: "Assurance of Salvation",
    books: [
      { title: "Can I Be Sure I'm Saved? — R.C. Sproul", href: "https://smile.amazon.com/Can-Sure-Saved-Crucial-Questions/dp/1642890421" },
      { title: "Gospel Assurance and Warnings — Paul Washer", href: "https://smile.amazon.com/Gospel-Assurance-Warnings-Recovering/dp/1601782942" },
    ],
  },
  {
    category: "Doctrine of Scripture",
    books: [
      { title: "Inerrancy — Norman Geisler", href: "https://smile.amazon.com/Inerrancy-Norman-L-Geisler/dp/0310392810" },
      { title: "Thy Word is Truth — E.J. Young", href: "https://smile.amazon.com/Thy-Word-Truth-J-Young/dp/0851511724" },
    ],
  },
  {
    category: "Doctrine of God",
    books: [
      { title: "Knowing God — J.I. Packer", href: "https://smile.amazon.com/Knowing-God-J-I-Packer/dp/0830816518" },
      { title: "The Holiness of God — R.C. Sproul", href: "https://smile.amazon.com/Holiness-God-R-C-Sproul/dp/0842339655" },
      { title: "The Doctrine of God — Herman Bavinck", href: "https://smile.amazon.com/Doctrine-Students-Reformed-Theological-Library/dp/0851512550" },
    ],
  },
  {
    category: "Doctrine of Salvation",
    books: [
      { title: "The Doctrine of Justification — James Buchanan", href: "https://smile.amazon.com/Doctrine-Justification-James-Buchanan/dp/046938834X" },
      { title: "Putting Amazing Back into Grace — Michael Horton", href: "https://smile.amazon.com/Putting-Amazing-Back-into-Grace/dp/0801014212" },
    ],
  },
  {
    category: "Systematic Theology",
    books: [
      { title: "Everyone's a Theologian — R.C. Sproul", href: "https://smile.amazon.com/Everyones-Theologian-Introduction-Systematic-Theology/dp/1642892025" },
      { title: "Reformed Systematic Theology — Joel Beeke", href: "https://smile.amazon.com/Reformed-Systematic-Theology-Experiential-Revelation/dp/1433559838" },
      { title: "Systematic Theology — Louis Berkhof", href: "https://smile.amazon.com/Systematic-Theology-Louis-Berkhof/dp/080282765X" },
    ],
  },
  {
    category: "Apologetics",
    books: [
      { title: "The Defense of the Faith — Cornelius Van Til", href: "https://smile.amazon.com/Defense-Faith-Cornelius-Van-Til/dp/0875526446" },
      { title: "Apologetics to the Glory of God — John Frame", href: "https://smile.amazon.com/Apologetics-Glory-God-John-Frame/dp/0875522432" },
    ],
  },
  {
    category: "Culture & Politics",
    books: [
      { title: "Politics — Wayne Grudem", href: "https://smile.amazon.com/Politics-According-Comprehensive-Understanding-Political/dp/0310330297" },
      { title: "When Helping Hurts — Steve Corbett", href: "https://smile.amazon.com/When-Helping-Hurts-Alleviate-Yourself/dp/0802409989" },
      { title: "Pro-Life Answers to Pro-Choice Arguments — Randy Alcorn", href: "https://smile.amazon.com/Pro-Life-Answers-Pro-Choice-Arguments-Expanded/dp/1576737519" },
    ],
  },
  {
    category: "Pornography",
    books: [
      { title: "Sexual Detox — Tim Challies", href: "https://smile.amazon.com/Sexual-Detox-Guide-Guys-Sick-ebook/dp/B004E3XGLY" },
      { title: "Pornography: Fighting for Purity — Deepak Reju", href: "https://smile.amazon.com/Pornography-Fighting-Purity-31-Day-Devotionals/dp/1629953636" },
    ],
  },
  {
    category: "False Religions",
    books: [
      { title: "Answering Islam — Norman Geisler", href: "https://smile.amazon.com/Answering-Islam-Crescent-Light-Cross/dp/0801064309" },
      { title: "Roman Catholics & Evangelicals — Norman Geisler", href: "https://smile.amazon.com/Roman-Catholics-Evangelicals-Agreements-Differences/dp/0801038758" },
      { title: "Compact Guide to World Religions — Dean Halverson", href: "https://smile.amazon.com/Compact-Guide-World-Religions/dp/1556617046" },
    ],
  },
];

export interface Podcast {
  label: string;
  href: string;
}

export const podcasts: Podcast[] = [
  { label: "Renewing Your Mind", href: "https://renewingyourmind.org/" },
  { label: "The Briefing", href: "https://albertmohler.com/the-briefing" },
  { label: "CrossPolitic", href: "https://crosspolitic.com/" },
  { label: "Apologia Radio", href: "http://apologiaradio.com/" },
  { label: "Cultish", href: "https://apologiastudios.com/cultish" },
  { label: "The Dividing Line", href: "https://www.aomin.org/aoblog/webcast/" },
  { label: "White Horse Inn", href: "https://www.whitehorseinn.org/radio/" },
  { label: "The Baptist Reformation", href: "https://podcasts.apple.com/us/podcast/the-baptist-reformations-podcast/id1390329602" },
  { label: "Confessing the Faith", href: "http://emmausrbc.org/ctf/" },
  { label: "The Sword & The Trowel", href: "https://founders.org/the-sword-the-trowel" },
];

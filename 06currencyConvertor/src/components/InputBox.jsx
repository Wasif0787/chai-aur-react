import React,{useId} from 'react';

// Create a custom map of currency codes to country names
const currencyCountryMap = {
    "00": "Unknown Country",
    inch: "Unknown Country",
    aave: "Unknown Country",
    abt: "Unknown Country",
    ach: "Unknown Country",
    acs: "Unknown Country",
    ada: "Unknown Country",
    aed: "United Arab Emirates",
    aergo: "Unknown Country",
    afn: "Afghanistan",
    agld: "Unknown Country",
    aioz: "Unknown Country",
    akt: "Unknown Country",
    alcx: "Unknown Country",
    aleph: "Unknown Country",
    algo: "Algorand",
    alice: "Unknown Country",
    all: "Unknown Country",
    amd: "Armenia",
    amp: "Unknown Country",
    ang: "Unknown Country",
    ankr: "Unknown Country",
    ant: "Unknown Country",
    aoa: "Angolan Kwanza",
    ape: "ApeCoin",
    api3: "API3",
    apt: "Apt Coin",
    ar: "Arweave",
    arb: "Arbitrum",
    arpa: "ARPA Chain",
    ars: "Argentine Peso",
    asm: "ASMO",
    ast: "AirSwap",
    ata: "Automata",
    atom: "Cosmos",
    ats: "ArtisTurba",
    auction: "Bounce",
    aud: "Australian Dollar",
    audio: "Audius",
    aurora: "Aurora",
    avax: "Avalanche",
    avt: "Aventus",
    awg: "Aruban Florin",
    axl: "Axie Infinity",
    axs: "Axie Infinity Shards",
    azm: "Azu",
    azn: "Azerbaijani Manat",
    badger: "Badger DAO",
    bake: "BakerySwap",
    bal: "Balancer",
    bam: "Bosnia and Herzegovina Convertible Mark",
    band: "Band Protocol",
    bat: "Basic Attention Token",
    bbd: "Barbadian Dollar",
    bch: "Bitcoin Cash",
    bdt: "Bangladeshi Taka",
    bef: "Belgian Franc",
    bgn: "Bulgarian Lev",
    bhd: "Bahraini Dinar",
    bico: "Biconomy",
    bif: "Burundian Franc",
    bigtime: "Big Time Token",
    bit: "Dao Maker",
    blur: "Blur Network",
    blz: "Bluzelle",
    bmd: "Bermudian Dollar",
    bnb: "Binance Coin",
    bnd: "Brunei Dollar",
    bnt: "Bancor Network Token",
    bob: "Bolivian Boliviano",
    boba: "Boba Network",
    bond: "BarnBridge",
    brl: "Brazilian Real",
    bsd: "Bahamian Dollar",
    bsv: "Bitcoin SV",
    bsw: "BittSwap",
    btc: "Bitcoin",
    btcb: "Wrapped Bitcoin",
    btg: "Bitcoin Gold",
    btn: "Bhutanese Ngultrum",
    btrst: "BitTrust",
    btt: "BitTorrent",
    busd: "Binance USD",
    bwp: "Botswana Pula",
    byn: "Belarusian Ruble",
    byr: "Belarusian Ruble (Pre-2016)",
    bzd: "Belize Dollar",
    c98: "Celo Dollar",
    cad: "Canadian Dollar",
    cake: "PancakeSwap",
    cbeth: "Celo Ethereum",
    cdf: "Congolese Franc",
    celo: "Celo",
    celr: "Celer Network",
    cfx: "Conflux",
    cgld: "Celo Gold",
    chf: "Swiss Franc",
    chz: "Chiliz",
    clp: "Chilean Peso",
    clv: "Clover Finance",
    cnh: "Chinese Yuan (Offshore)",
    cny: "Chinese Yuan",
    comp: "Compound",
    cop: "Colombian Peso",
    coti: "COTI",
    coval: "Circuits of Value",
    crc: "Costa Rican Colón",
    cro: "Crypto.com Coin",
    crpt: "Crypterium",
    crv: "Curve DAO Token",
    cspr: "Casper Network",
    ctsi: "Cartesi",
    ctx: "Cryptex",
    cuc: "Cuban Convertible Peso",
    cup: "Cuban Peso",
    cvc: "Civic",
    cve: "Cape Verdean Escudo",
    cvx: "Convex Finance",
    cyp: "Cypriot Pound",
    czk: "Czech Koruna",
    dai: "Dai",
    dar: "Decentraland (MANA) Red",
    dash: "Dash",
    dcr: "Decred",
    ddx: "DerivaDAO",
    dem: "German Mark",
    deso: "Deso",
    dext: "DEXTools",
    dfi: "DeFiChain",
    dia: "DIA",
    dimo: "Dimo",
    djf: "Djiboutian Franc",
    dkk: "Danish Krone",
    dnt: "district0x",
    doge: "Dogecoin",
    dop: "Dominican Peso",
    dot: "Polkadot",
    drep: "dYdX",
    dydx: "dYdX",
    dyp: "DePay",
    dzd: "Algerian Dinar",
    eek: "Estonian Kroon",
    egld: "Elrond",
    egp: "Egyptian Pound",
    ela: "Elastos",
    enj: "Enjin Coin",
    ens: "The Sandbox",
    eos: "EOS",
    ern: "Ethernity Chain",
    esp: "Spanish Peseta",
    etb: "Ethiopian Birr",
    etc: "Ethereum Classic",
    eth: "Ethereum",
    eth2: "Ethereum 2.0",
    eur: "Euro",
    euroc: "EUROCHAIN",
    farm: "Harvest Finance",
    fei: "Fei Protocol",
    fet: "Fetch.ai",
    fida: "Bonfida",
    fil: "Filecoin",
    fim: "Fantom",
    fis: "StaFi",
    fjd: "Fijian Dollar",
    fkp: "Falkland Islands Pound",
    flow: "Flow",
    flr: "Flare",
    fort: "Forta",
    forth: "Ampleforth Governance Token",
    fox: "Shiba Inu",
    frax: "Frax",
    frf: "French Franc",
    ftm: "Fantom",
    ftt: "FTX Token",
    fx: "Function X",
    fxs: "Frax Share",
    gal: "Galatasaray Fan Token",
    gala: "Gala",
    gbp: "British Pound Sterling",
    gel: "Georgian Lari",
    gfi: "Gravity Finance",
    ggp: "Guernsey Pound",
    ghc: "Ghanaian Cedi (pre-2007)",
    ghs: "Ghanaian Cedi",
    ghst: "Aavegotchi",
    gip: "Gibraltar Pound",
    glm: "Golem",
    gmd: "Gambian Dalasi",
    gmt: "GoWithMi",
    gmx: "GoldMaxCoin",
    gnf: "Guinean Franc",
    gno: "Gnosis",
    gnt: "Golem",
    gods: "Gods Unchained",
    grd: "Greek Drachma",
    grt: "The Graph",
    gst: "GameStop Token",
    gt: "Gamt Token",
    gtc: "Gitcoin",
    gtq: "Guatemalan Quetzal",
    gusd: "Gemini Dollar",
    gyd: "Guyanese Dollar",
    gyen: "Guyana Gold Board (XGG)",
    hbar: "Hedera Hashgraph",
    hft: "HedgeTrade",
    high: "Highstreet Token",
    hkd: "Hong Kong Dollar",
    hnl: "Honduran Lempira",
    hnt: "Helium",
    hopr: "HOPR",
    hot: "Holo",
    hrk: "Croatian Kuna",
    ht: "Huobi Token",
    htg: "Haitian Gourde",
    huf: "Hungarian Forint",
    icp: "Internet Computer",
    idex: "IDEX",
    idr: "Indonesian Rupiah",
    iep: "Irish Pound",
    ils: "Israeli New Shekel",
    ilv: "Illuvium",
    imp: "Isle of Man Pound",
    imx: "Immutable X",
    index: "Indexed Finance",
    inj: "Injective Protocol",
    inr: "Indian Rupee",
    inv: "Inverse Finance",
    iotx: "IoTeX",
    iqd: "Iraqi Dinar",
    irr: "Iranian Rial",
    isk: "Icelandic Króna",
    itl: "Italian Lira",
    jasmy: "JasmyCoin",
    jep: "Jersey Pound",
    jmd: "Jamaican Dollar",
    jod: "Jordanian Dinar",
    jpy: "Japanese Yen",
    jup: "Jupiter",
    kas: "KardiaChain",
    kava: "Kava.io",
    kcs: "KuCoin Token",
    kda: "Kadena",
    keep: "Keep Network",
    kes: "Kenyan Shilling",
    kgs: "Kyrgyzstani Som",
    khr: "Cambodian Riel",
    klay: "Klaytn",
    kmf: "Comorian Franc",
    knc: "Kyber Network",
    kpw: "North Korean Won",
    krl: "Kryll",
    krw: "South Korean Won",
    ksm: "Kusama",
    kwd: "Kuwaiti Dinar",
    kyd: "Cayman Islands Dollar",
    kzt: "Kazakhstani Tenge",
    lak: "Laotian Kip",
    lbp: "Lebanese Pound",
    lcx: "LCX",
    ldo: "Lido DAO",
    leo: "UNUS SED LEO",
    link: "Chainlink",
    lit: "Lition",
    lkr: "Sri Lankan Rupee",
    loka: "LokalCoin",
    loom: "Loom Network",
    lpt: "Livepeer",
    lqty: "Liquity",
    lrc: "Loopring",
    lrd: "Liberian Dollar",
    lseth: "Lithuanian Ethereum",
    lsl: "Lesotho Loti",
    ltc: "Litecoin",
    ltl: "Lithuanian Litas",
    luf: "Luxembourgian Franc",
    luna: "Terra",
    lunc: "LunarCoin",
    lvl: "Latvian Lats",
    lyd: "Libyan Dinar",
    mad: "Moroccan Dirham",
    magic: "aMagic",
    mana: "Decentraland",
    mask: "Mask Network",
    math: "MATH",
    matic: "Polygon",
    mco2: "MCO2",
    mdl: "MDL Talent Hub",
    mdt: "Measurable Data Token",
    media: "Media Network",
    metis: "Metis",
    mga: "Malagasy Ariary",
    mgf: "Malagasy Franc",
    mina: "Mina Protocol",
    mir: "Mirror Protocol",
    mkd: "Macedonian Denar",
    mkr: "Maker",
    mln: "Enzyme",
    mmk: "Myanmar Kyat",
    mnde: "Mender",
    mnt: "Mongolian Tugrik",
    mona: "Monacoin",
    mop: "Macanese Pataca",
    mpl: "Maple Finance",
    mro: "Mauritanian Ouguiya",
    mru: "Mauritanian Ouguiya",
    msol: "Samoan Tala",
    mtl: "Metal",
    multi: "Multi",
    mur: "Mauritian Rupee",
    musd: "mStable USD",
    muse: "Muse",
    mvr: "Maldivian Rufiyaa",
    mwk: "Malawian Kwacha",
    mxc: "MXC",
    mxn: "Mexican Peso",
    mxv: "Mexican Unidad de Inversion",
    myr: "Malaysian Ringgit",
    mzm: "Mozambican Metical",
    mzn: "Mozambican Metical",
    nad: "Namibian Dollar",
    nct: "PolySwarm",
    near: "Near Protocol",
    neo: "Neo",
    nest: "Nest Protocol",
    nexo: "Nexo",
    nft: "NFT Protocol",
    ngn: "Nigerian Naira",
    nio: "Nicaraguan Cordoba",
    nkn: "NKN",
    nlg: "Gulden",
    nmr: "Numeraire",
    nok: "Norwegian Krone",
    npr: "Nepalese Rupee",
    nu: "NuCypher",
    nzd: "New Zealand Dollar",
    ocean: "Ocean Protocol",
    ogn: "Origin Protocol",
    okb: "OKB",
    omg: "OMG Network",
    omr: "Omani Rial",
    one: "Harmony",
    ooki: "Ooki Token",
    op: "Origin Protocol",
    orca: "Orca",
    orn: "Orion Protocol",
    osmo: "OSMO",
    oxt: "Orchid",
    pab: "Panamanian Balboa",
    pax: "Paxos Standard",
    paxg: "PAX Gold",
    pen: "Peruvian Nuevo Sol",
    pepe: "Pepe",
    perp: "Perpetual Protocol",
    pgk: "Papua New Guinean Kina",
    php: "Philippine Peso",
    pkr: "Pakistani Rupee",
    pla: "PlayDapp",
    pln: "Polish Zloty",
    plu: "Pluton",
    png: "Pangolin",
    pols: "Polkastarter",
    poly: "Polymath",
    pond: "Marlin",
    powr: "Power Ledger",
    prime: "Primecoin",
    pro: "Propy",
    prq: "PARSIQ",
    pte: "PROMETHEUS",
    pundix: "Pundi X",
    pyg: "Paraguayan Guarani",
    pyr: "PolyYield Token",
    pyusd: "PEGNet USD",
    qar: "Qatari Rial",
    qi: "DeFi Yield Protocol",
    qnt: "Quant",
    qsp: "Quantstamp",
    qtum: "Qtum",
    quick: "Quickswap",
    rad: "Radicle",
    rai: "Rai Reflex Index",
    rare: "SuperRare",
    rari: "Rarible",
    rbn: "Ribbon Finance",
    ren: "Ren",
    rep: "Augur",
    repv2: "Augur v2",
    req: "Request",
    rgt: "Rari Governance Token",
    rlc: "iExec RLC",
    rly: "Rally",
    rndr: "Render Token",
    rol: "Romanian Leu",
    ron: "Romanian Leu",
    rose: "Oasis Network",
    rpl: "Rocket Pool",
    rsd: "Serbian Dinar",
    rub: "Russian Ruble",
    rune: "THORChain",
    rvn: "Ravencoin",
    rwf: "Rwandan Franc",
    sand: "The Sandbox",
    sar: "Saudi Riyal",
    sbd: "Solomon Islands Dollar",
    scr: "Seychellois Rupee",
    sdd: "Sudanese Dinar (1992–2007)",
    sdg: "Sudanese Pound",
    sei: "Seigniorage Shares",
    sek: "Swedish Krona",
    sgd: "Singapore Dollar",
    shib: "Shiba Inu",
    shp: "Saint Helena Pound",
    shping: "Shping",
    sit: "Slovenian Tolar",
    skk: "Slovak Koruna",
    skl: "Sukhumi Lari",
    sle: "Sierra Leonean Leone",
    sll: "Sierra Leonean Leone",
    snt: "Status Network",
    snx: "Synthetix",
    sol: "Solana",
    sos: "Somali Shilling",
    spa: "SpaCoin",
    spell: "Spell Token",
    spl: "São Tomé and Príncipe Dobra",
    srd: "Surinamese Dollar",
    srg: "Surinamese guilder",
    ssp: "South Sudanese Pound",
    std: "São Tomé and Príncipe Dobra",
    stg: "Sting",
    stn: "Steneum Coin",
    storj: "Storj",
    stx: "Blockstack",
    sui: "Swisscoin",
    suku: "SUKU",
    super: "SuperFarm",
    sushi: "SushiSwap",
    svc: "SilverCoin",
    swftc: "SwftCoin",
    sylo: "Sylo",
    syn: "Havven",
    syp: "Syrian Pound",
    szl: "Swazi Lilangeni",
    t: "Turton",
    thb: "Thai Baht",
    theta: "Theta Token",
    time: "Chrono.tech",
    tjs: "Tajikistani Somoni",
    tmm: "Turkmenistani Manat (1993–2009)",
    tmt: "Turkmenistan Manat",
    tnd: "Tunisian Dinar",
    ton: "Tokelauan Paʻanga",
    tone: "Honeyswap",
    top: "Top Network",
    trac: "OriginTrail",
    trb: "Tellor",
    tribe: "Tribe",
    trl: "Turkish Lira (Old)",
    tru: "TrueFi",
    trx: "TRON",
    try: "Turkish Lira",
    ttd: "Trinidad and Tobago Dollar",
    ttt: "TrustNote",
    tusd: "TrueUSD",
    tvd: "Tuvaluan Dollar",
    tvk: "Terra Virtua Kolect",
    twd: "New Taiwan Dollar",
    twt: "Trust Wallet",
    tzs: "Tanzanian Shilling",
    uah: "Ukrainian Hryvnia",
    ugx: "Ugandan Shilling",
    uma: "UMA",
    unfi: "Unifi",
    uni: "Uniswap",
    upi: "uPlexa",
    usd: "United States Dollar",
    usdc: "USD Coin",
    usdd: "Dai (Multi Collateral Dai)",
    usdp: "USDP Stablecoin",
    usdt: "Tether",
    ust: "TerraUSD",
    uyu: "Uruguayan Peso",
    uzs: "Uzbekistan Som",
    val: "Vatican Lira",
    vara: "Varanium",
    veb: "Venezuelan Bolívar (Old)",
    ved: "VeriDocGlobal",
    vef: "Venezuelan Bolívar",
    ves: "Venezuelan Bolívar Soberano",
    vet: "VeChain",
    vgx: "Voyager Token",
    vnd: "Vietnamese Đồng",
    voxel: "Voxel",
    vtho: "VeThor Token",
    vuv: "Vanuatu Vatu",
    wampl: "Wrapped Ampl",
    waves: "Waves",
    waxl: "Wrapped AXie Infinity",
    wbtc: "Wrapped Bitcoin",
    wcfg: "Wrapped Centrifuge",
    wemix: "WeMix",
    wluna: "Wrapped Terra",
    woo: "Wootrade Network",
    wst: "Samoan Tala",
    xaf: "Central African CFA Franc",
    xag: "Silver Ounce",
    xau: "Gold Ounce",
    xaut: "Troy Ounce Token",
    xbt: "Bitcoin",
    xcd: "East Caribbean Dollar",
    xch: "Chaincoin",
    xcn: "Cryptonite",
    xdc: "XinFin Coin",
    xdr: "International Monetary Fund (IMF) Special Drawing Rights",
    xec: "Economics",
    xem: "NEM",
    xlm: "Stellar Lumens",
    xmon: "Xmon",
    xmr: "Monero",
    xof: "West African CFA Franc",
    xpd: "Palladium Ounce",
    xpf: "CFP Franc",
    xpt: "Platinum Ounce",
    xrp: "Ripple",
    xtz: "Tezos",
    xyo: "XYO",
    yer: "Yemeni Rial",
    yfi: "yearn.finance",
    yfii: "DFI.money",
    zar: "South African Rand",
    zec: "Zcash",
    zen: "Horizen",
    zil: "Zilliqa",
    zmk: "Zambian Kwacha (pre-2013)",
    zmw: "Zambian Kwacha",
    zrx: "0x",
    zwd: "Zimbabwean Dollar (pre-2009)",
    zwl: "Zimbabwean Dollar (2009)"
    // Add more currency codes and country names as needed
};

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor="amountInputID" className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none overflow-hidden
                    w-[200px]"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {/* {`${currency} (${currencyCountryMap[currency]})`} */}
                            {currency+" ("+currencyCountryMap[currency]+")"}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

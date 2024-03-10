"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFilter = void 0;
const erela_js_1 = require("erela.js");
class customFilter extends erela_js_1.Plugin {
    load() {
        erela_js_1.Structure.extend("Player", (Player) => class extends Player {
            constructor() {
                super(...arguments);
                //Private Filter Boolean
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                //Private Filter Data
                this._resetData = {
                    op: "filters",
                    guildId: this.guild,
                };
                this._nightcoreData = {
                    op: "filters",
                    guildId: this.guild,
                    timescale: {
                        speed: 1.3,
                        pitch: 1.3,
                        rate: 1.0
                    }
                };
                this._lovenightcoreData = {
                    op: "filters",
                    guildId: this.guild,
                timescale: {
                        speed: 1.1,
                        pitch: 1.2,
                        rate: 1.0
                    }
                  };
                this._vaporwaveData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 1, gain: 0.3 },
                        { band: 0, gain: 0.3 },
                    ],
                    timescale: { pitch: 0.5 },
                    tremolo: { depth: 0.3, frequency: 14 }
                };
                this._bassboostData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.6 },
                        { band: 1, gain: 0.67 },
                        { band: 2, gain: 0.67 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: -0.5 },
                        { band: 5, gain: 0.15 },
                        { band: 6, gain: -0.45 },
                        { band: 7, gain: 0.23 },
                        { band: 8, gain: 0.35 },
                        { band: 9, gain: 0.45 },
                        { band: 10, gain: 0.55 },
                        { band: 11, gain: 0.6 },
                        { band: 12, gain: 0.55 },
                        { band: 13, gain: 0 }
                    ],
                };
                this._bassboosthighData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.1875 },
                        { band: 1, gain: 0.375 },
                        { band: 2, gain: -0.375 },
                        { band: 3, gain: -0.1875 },
                        { band: 4, gain: 0 },
                        { band: 5, gain: -0.0125 },
                        { band: 6, gain: -0.025 },
                        { band: 7, gain: -0.0175 },
                        { band: 8, gain: 0 },
                        { band: 9, gain: 0 },
                        { band: 10, gain: 0.0125 },
                        { band: 11, gain: 0.025 },
                        { band: 12, gain: 0.375 },
                        { band: 13, gain: 0.125 },
                        { band: 14, gain: 0.125 }
                    ],
                };
                
                this._popData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: -0.25 },
                        { band: 1, gain: 0.48 },
                        { band: 2, gain: 0.59 },
                        { band: 3, gain: 0.72 },
                        { band: 4, gain: 0.56 },
                        { band: 5, gain: 0.15 },
                        { band: 6, gain: -0.24},
                        { band: 7, gain: -0.24 },
                        { band: 8, gain: -0.16 },
                        { band: 9, gain: -0.16 },
                        { band: 10, gain: 0 },
                        { band: 11, gain: 0 },
                        { band: 12, gain: 0 },
                        { band: 13, gain: 0 },
                        { band: 14, gain: 0 }
                    ],
                };
                this._softData = {
                    op: "filters",
                    guildId: this.guild,
                    lowPass: {
                        smoothing: 20.0
                    }
                };
                this._treblebassData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.6 },
                        { band: 1, gain: 0.67 },
                        { band: 2, gain: 0.67 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: -0.5 },
                        { band: 5, gain: 0.15 },
                        { band: 6, gain: -0.45 },
                        { band: 7, gain: 0.23 },
                        { band: 8, gain: 0.35 },
                        { band: 9, gain: 0.45 },
                        { band: 10, gain: 0.55 },
                        { band: 11, gain: 0.6 },
                        { band: 12, gain: 0.55 },
                        { band: 13, gain: 0 },
                    ],
                };
                this._eightDData = {
                    op: "filters",
                    guildId: this.guild,
                    rotation: {
                        rotationHz: 0.2
                    }
                };
                this._karaokeData = {
                    op: "filters",
                    guildId: this.guild,
                    karaoke: {
                        level: 1.0,
                        monoLevel: 1.0,
                        filterBand: 220.0,
                        filterWidth: 100.0
                    },
                };
                this._vibratoData = {
                    op: "filters",
                    guildId: this.guild,
                    vibrato: {
                        frequency: 10,
                        depth: 0.9
                    }
                };
                this._tremoloData = {
                    op: "filters",
                    guildId: this.guild,
                    tremolo: {
                        frequency: 10,
                        depth: 0.5
                    }
                };
                this._classicalData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.375 },
                        { band: 1, gain: 0.350 },
                        { band: 2, gain: 0.125 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: 0 },
                        { band: 5, gain: 0.125 },
                        { band: 6, gain: 0.550 },
                        { band: 7, gain: 0.050 },
                        { band: 8, gain: 0.125 },
                        { band: 9, gain: 0.250 },
                        { band: 10, gain: 0.200 },
                        { band: 11, gain: 0.250 },
                        { band: 12, gain: 0.300 },
                        { band: 13, gain: 0.250 },
                        { band: 14, gain: 0.300 }
                    ],
                };
                this._darthvadorData = {
                    op: "filters",
                    guildId: this.guild,
                    timescale: {
                        speed: 0.975,
                        pitch: 0.5,
                        rate: 0.8
                    }
                };
                this._electronicData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.375 },
                        { band: 1, gain: 0.350 },
                        { band: 2, gain: 0.125 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: 0 },
                        { band: 5, gain: -0.125 },
                        { band: 6, gain: -0.125 },
                        { band: 7, gain: 0 },
                        { band: 8, gain: 0.25 },
                        { band: 9, gain: 0.125 },
                        { band: 10, gain: 0.15 },
                        { band: 11, gain: 0.2 },
                        { band: 12, gain: 0.250 },
                        { band: 13, gain: 0.350 },
                        { band: 14, gain: 0.400 }
                    ],
                };
                this._errapeData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band:0, gain: 0.25 },
                        { band: 1, gain: 0.5 },
                        { band: 2, gain: -0.5 },
                        { band: 3, gain: -0.25 },
                        { band: 4, gain: 0 },
                        { band: 6, gain: -0.025 },
                        { band: 7, gain: -0.0175 },
                        { band: 8, gain: 0 },
                        { band: 9, gain: 0 },
                        { band: 10, gain: 0.0125 },
                        { band: 11, gain: 0.025 },
                        { band: 12, gain: 0.375 },
                        { band: 13, gain: 0.125 },
                        { band: 14, gain: 0.125 }
                    ],
                };
                this._gamingData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.350 },
                        { band: 1, gain: 0.300 },
                        { band: 2, gain: 0.250 },
                        { band: 3, gain: 0.200 },
                        { band: 4, gain: 0.150 },
                        { band: 5, gain: 0.100 },
                        { band: 6, gain: 0.050 },
                        { band: 7, gain: -0.0 },
                        { band: 8, gain: -0.050 },
                        { band: 9, gain: -0.100 },
                        { band: 10, gain: -0.150 },
                        { band: 11, gain: -0.200 },
                        { band: 12, gain: -0.250 },
                        { band: 13, gain: -0.300 },
                        { band: 14, gain: -0.350 }
                    ]
                };
                this._highfullData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                    { band: 0, gain: 0.25 + 0.375 },
                    { band: 1, gain: 0.25 + 0.025 },
                    { band: 2, gain: 0.25 + 0.0125 },
                    { band: 3, gain: 0.25 },
                    { band: 4, gain: 0.25 },
                    { band: 5, gain: 0.25 + -0.0125  },
                    { band: 6, gain: 0.25 + -0.025 },
                    { band: 7, gain: 0.25 + 0.0175 },
                    { band: 8, gain: 0.25 },
                    { band: 9, gain: 0.25 },
                    { band: 10, gain: 0.25 + 0.0125 },
                    { band: 11, gain: 0.25 + 0.025 },
                    { band: 12, gain: 0.25 + 0.375 },
                    { band: 13, gain: 0.25 + 0.125 },
                    { band: 14, gain: 0.25 + 0.125 }
                    ]
                };
                this._highvoiceData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: -2.0 },
                        { band: 1, gain: -2.0 },
                        { band: 2, gain: -5.0 },
                        { band: 3, gain: 4 },
                        { band: 4, gain: 3 },
                        { band: 5, gain: 1 },
                        { band: 6, gain: 0.1 },
                        { band: 7, gain: 2.2 },
                        { band: 8, gain: 0.5 }
                    ],
                };
                this._partyData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: -1.16 },
                        { band: 1, gain: 0.28 },
                        { band: 2, gain: 0.42 },
                        { band: 3, gain: 0.5 },
                        { band: 4, gain: 0.36 },
                        { band: 5, gain: 0 },
                        { band: 6, gain: -0.3},
                        { band: 7, gain: -0.21 },
                        { band: 8, gain: -0.21 }
                    ],
                };
                this._radioData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.65 },
                        { band: 1, gain: 0.45 },
                        { band: 2, gain: -0.45 },
                        { band: 3, gain: -0.65 },
                        { band: 4, gain: -0.35 },
                        { band: 5, gain: 0.45 },
                        { band: 6, gain: 0.55},
                        { band: 7, gain: 0.6 },
                        { band: 8, gain: 0.6 },
                        { band: 9, gain: 0.6 },
                        { band: 10, gain: 0 },
                        { band: 11, gain: 0 },
                        { band: 12, gain: 0 },
                        { band: 13, gain: 0 },
                        { band: 14, gain: 0 }
                    ]
                };
                this._rockData = {
                    op: "filters",
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.300 },
                        { band: 1, gain: 0.250 },
                        { band: 2, gain: 0.200 },
                        { band: 3, gain: 0.100 },
                        { band: 4, gain: 0.050 },
                        { band: 5, gain: -0.050 },
                        { band: 6, gain: -0.150 },
                        { band: 7, gain: -0.200 },
                        { band: 8, gain: -0.100 },
                        { band: 9, gain: -0.050 },
                        { band: 10, gain: 0.050 },
                        { band: 11, gain: 0.100 },
                        { band: 12, gain: 0.200 },
                        { band: 13, gain: 0.250 },
                        { band: 14, gain: 0.300 }
                    ]
                };
                this._superfastData = {
                    op: "filters",
                    guildId: this.guild,
                    timescale: {
						speed: 1.5010,
						pitch: 1.2450,
						rate: 1.9210
					}
                };
            }
            //Setting the filter
            set nightcore(status) {
                this._nightcore = status;
                if (status) {
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._lovenightcore = false;
                    this._party = false;
                    this._pop = false;
                    this._radio = false;
                    this._rock = false;
                    this._soft = false;
                    this._superfast = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vaporewave = false;
                    this._vibrato = false;
             this.node.send(this._nightcoreData);
                }
                else
                    this._resetnode();
            }
            set lovenightcore(status) {
                this._lovenightcore = status;
                if (status) {
                    this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
           this.node.send(this._lovenightcoreData);
                }
                else
                    this._resetnode();
            }
            set vaporwave(status) {
                this._vaporwave = status;
                if (status) {
                    this._nightcore = false;
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._lovenightcore = false;
                    this._party = false;
                    this._pop = false;
                    this._radio = false;
                    this._rock = false;
                    this._soft = false;
                    this._superfast = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vibrato = false;
                    this.node.send(this._vaporwaveData);
                }
                else
                    this._resetnode();
            }
            set bass(status) {
                this._bass = status;
                if (status) {
                    this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                this.node.send(this._bassData);
                }
                else
                    this._resetnode();
            }
            set bassboosthigh(status) {
                this._bassboosthigh = status;
                if (status) {
                    this._bass = false;
                    this._bassboost = false;
                    this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
               this.node.send(this._bassboosthighData);
                }
                else
                    this._resetnode();
            }
            set bassboost(status) {
                this._bassboost = status;
                if (status) {
                    this._nightcore = false;
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._lovenightcore = false;
                    this._party = false;
                    this._pop = false;
                    this._radio = false;
                    this._rock = false;
                    this._soft = false;
                    this._superfast = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vibrato = false;
                    this._vaporwave = false;
                    this.node.send(this._bassboostData);
                }
                else
                    this._resetnode();
            }
            set pop(status) {
                this._pop = status;
                if (status) {
                    this._nightcore = false;
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._lovenightcore = false;
                    this._party = false;
                    this._bassboost = false;
                    this._radio = false;
                    this._rock = false;
                    this._soft = false;
                    this._superfast = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vibrato = false;
                    this._vaporwave = false;
                    this.node.send(this._popData);
                }
                else
                    this._resetnode();
            }
            set soft(status) {
                this._soft = status;
                if (status) {
                    this._nightcore = false;
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._lovenightcore = false;
                    this._party = false;
                    this._bassboost = false;
                    this._radio = false;
                    this._rock = false;
                    this._pop = false;
                    this._superfast = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vibrato = false;
                    this._vaporwave = false;
                    this.node.send(this._softData);
                }
                else
                    this._resetnode();
            }
            set treblebass(status) {
                this._treblebass = status;
                if (status) {
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                    this.node.send(this._treblebassData);
                }
                else
                    this._resetnode();
            }
            set eightD(status) {
                this._eightD = status;
                if (status) {
                    this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                    this.node.send(this._eightDData);
                }
                else
                    this._resetnode();
            }
            set karaoke(status) {
                this._karaoke = status;
                if (status) {
                    this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                    this.node.send(this._karaokeData);
                }
                else
                    this._resetnode();
            }
            set vibrato(status) {
                this._vibrato = status;
                if (status) {
                    this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                    this.node.send(this._vibratoData);
                }
                else
                    this._resetnode();
            }
            set tremolo(status) {
                this._tremolo = status;
                if (status) {
                    this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._vaporewave = false;
                this._vibrato = false;
                    this.node.send(this._tremoloData);
                }
                else
                    this._resetnode();
            }
            set classical(status) {
                this._classical = status;
                if (status) {
                    this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                this.node.send(this._classicalData);
                }
                else
                    this._resetnode();
            }
            set darthvador(status) {
                this._classical = status;
                if (status) {
                 this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                this.node.send(this._darthvadorData);
                }
                else
                    this._resetnode();
            }
            set electronic(status) {
                this._electronic = status;
                if (status) {
                    this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                this.node.send(this._electronicData);
                }
                else
                    this._resetnode();
            }
             set errape(status) {
                this._errape = status;
                if (status) {
                     this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                this.node.send(this._errapeData);
                }
                else
                    this._resetnode();
            }
            set gaming(status) {
                this._gaming = status;
                if (status) {
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                this.node.send(this._gamingData);
                }
                else
                    this._resetnode();
            }
             set highfull(status) {
                this._highfull = status;
                if (status) {
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                this.node.send(this._highfullData);
                }
                else
                    this._resetnode();
            }
            set highvoice(status) {
                this._highvoice = status;
                if (status) {
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                this.node.send(this._highvoiceData);
                }
                else
                    this._resetnode();
            }
             set party(status) {
                this._party = status;
                if (status) {
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._nightcore = false;
                    this._lovenightcore = false;
                    this._pop = false;
                    this._radio = false;
                    this._rock = false;
                    this._soft = false;
                    this._superfast = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vaporewave = false;
                    this._vibrato = false;
           this.node.send(this._partyData);
                }
                else
                    this._resetnode();
            }
            set radio(status) {
                this._radio = status;
                if (status) {
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._nightcore = false;
                    this._lovenightcore = false;
                    this._party = false;
                    this._pop = false;
                    this._rock = false;
                    this._soft = false;
                    this._superfast = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vaporewave = false;
                    this._vibrato = false;
           this.node.send(this._radioData);
                }
                else
                    this._resetnode();
            }
            set rock(status) {
                this._rock = status;
                if (status) {
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._nightcore = false;
                    this._lovenightcore = false;
                    this._party = false;
                    this._pop = false;
                    this._radio = false;
                    this._soft = false;
                    this._superfast = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vaporewave = false;
                    this._vibrato = false;
           this.node.send(this._rockData);
                }
                else
                    this._resetnode();
            }
            set superfast(status) {
                this._superfast = status;
                if (status) {
                    this._bass = false;
                    this._bassboost = false;
                    this._bassboosthigh = false;
                    this._classical = false;
                    this._darthvador = false;
                    this._eightD = false;
                    this._electronic = false;
                    this._errape = false;
                    this._gaming = false;
                    this._highfull = false;
                    this._highvoice = false;
                    this._karaoke = false;
                    this._nightcore = false;
                    this._lovenightcore = false;
                    this._party = false;
                    this._pop = false;
                    this._radio = false;
                    this._rock = false;
                    this._soft = false;
                    this._treblebass = false;
                    this._tremolo = false;
                    this._vaporewave = false;
                    this._vibrato = false;
           this.node.send(this._superfastData);
                }
                else
                    this._resetnode();
            }
            //Get Filter Status
            get nightcore() {
                return this._nightcore;
            }
            get vaporwave() {
                return this._vaporwave;
            }
            get bassboost() {
                return this._bassboost;
            }
            get pop() {
                return this._pop;
            }
            get soft() {
                return this._soft;
            }
            get treblebass() {
                return this._treblebass;
            }
            get eightD() {
                return this._eightD;
            }
            get karaoke() {
                return this._karaoke;
            }
            get vibrato() {
                return this._vibrato;
            }
            get tremolo() {
                return this._tremolo;
            }
            get classical() {
                return this._classical;
            }

            get darthvador() {
                return this._darthvador;
            }
            get electronic() {
                return this._electronic;
            }

            get errape() {
                return this._errape;
            }

            get gaming() {
                return this._gaming;
            }

            get highfull() {
                return this._highfull;
            }

            get highvoice() {
                return this._highvoice;
            }
            get party() {
                return this._party;
            }

            get pop() {
                return this._pop;
            }

            get radio() {
                return this._radio;
            }

            get rock() {
                return this._rock;
            }
            
            get superfast() {
                return this._superfast;
            }
            
            get lovenightcore() {
                return this._lovenightcore;
            }
            //Reset Everything
            _resetnode() {
                this.node.send(this._resetData);
            }
            reset() {
                this._resetnode();
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightD = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._lovenightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
            }
        });
    }
}
exports.customFilter = customFilter;

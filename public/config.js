// ═══════════════════════════════════════════════════════════
// RAYMAX — File di Configurazione
// Modifica questo file per aggiornare prezzi e dati studio.
// NON modificare Raymax_Fotografo_v4.html
// ═══════════════════════════════════════════════════════════

window.RAYMAX_CONFIG = {

  // ── Dati Studio ──────────────────────────────────────────
  studio: {
    nome:       "Massimo Inturrisi",
    qualifica:  "Fotografo",
    indirizzo:  "Via A. Carrubba 8/9",
    citta:      "96010 Solarino (SR)",
    piva:       "01726290891",
    tel:        "339 159 4106"
  },

  // ── Formati Album ─────────────────────────────────────────
  // pagina  = costo per singola pagina (€)
  // copertina = costo copertina base (€)
  formati: [
    { id:"20x30", label:"20x30", pagina:4.5,  copertina:55,  famiglia:"20x30" },
    { id:"30x20", label:"30x20", pagina:4.5,  copertina:55,  famiglia:"20x30" },
    { id:"25x25", label:"25x25", pagina:4.5,  copertina:55,  famiglia:"20x30" },
    { id:"25x35", label:"25x35", pagina:5.5,  copertina:65,  famiglia:"25x35" },
    { id:"35x25", label:"35x25", pagina:5.5,  copertina:65,  famiglia:"25x35" },
    { id:"30x30", label:"30x30", pagina:5.5,  copertina:65,  famiglia:"25x35" },
    { id:"30x40", label:"30x40", pagina:7.0,  copertina:85,  famiglia:"30x40" },
    { id:"40x30", label:"40x30", pagina:7.0,  copertina:85,  famiglia:"30x40" },
    { id:"35x35", label:"35x35", pagina:7.0,  copertina:85,  famiglia:"30x40" },
    { id:"35x45", label:"35x45", pagina:7.5,  copertina:100, famiglia:"35x45" },
    { id:"45x35", label:"45x35", pagina:7.5,  copertina:100, famiglia:"35x45" },
    { id:"40x40", label:"40x40", pagina:7.5,  copertina:100, famiglia:"35x45" }
  ],

  // ── Box Coordinato ────────────────────────────────────────
  // Prezzi per famiglia formato. Ogni fascia ha un cod (etichetta) e un costo (€)
  box: {
    "20x30": [
      { cod:"NO BOX",                                      costo:0   },
      { cod:"G-SE-F",                                      costo:70  },
      { cod:"C-CL-E-FL-P-N-Z",                             costo:100 },
      { cod:"CP-RG-LG-PL-PLR-LA-LC-LN-LR-OL-RF",          costo:150 }
    ],
    "25x35": [
      { cod:"NO BOX",                                      costo:0   },
      { cod:"G-SE-F",                                      costo:75  },
      { cod:"C-CL-E-FL-P-N-Z",                             costo:105 },
      { cod:"CP-RG-LG-PL-PLR-LA-LC-LN-LR-OL-RF",          costo:155 }
    ],
    "30x40": [
      { cod:"NO BOX",                                      costo:0   },
      { cod:"G-SE-F",                                      costo:90  },
      { cod:"C-CL-E-FL-P-N-Z",                             costo:120 },
      { cod:"CP-RG-LG-PL-PLR-LA-LC-LN-LR-OL-RF",          costo:170 }
    ],
    "35x45": [
      { cod:"NO BOX",                                      costo:0   },
      { cod:"G-SE-F",                                      costo:110 },
      { cod:"C-CL-E-FL-P-N-Z",                             costo:135 },
      { cod:"CP-RG-LG-PL-PLR-LA-LC-LN-LR-OL-RF",          costo:185 }
    ]
  },

  // ── Modelli Copertina ─────────────────────────────────────
  // extra = supplemento sul prezzo copertina base (€). 0 = nessun supplemento
  copertine: [
    { cod:"COPERTINA STANDARD", extra:0 },
    { cod:"COPERTINA ECO",      extra:0, eco:true },
    { cod:"F04",  extra:10 }, { cod:"F09",  extra:10 }, { cod:"F10",  extra:10 },
    { cod:"F13",  extra:10 }, { cod:"F24",  extra:10 },
    { cod:"F11",  extra:20 }, { cod:"F12",  extra:20 }, { cod:"F27",  extra:20 },
    { cod:"F02",  extra:25 }, { cod:"F05",  extra:25 }, { cod:"F06",  extra:25 },
    { cod:"F14",  extra:25 }, { cod:"F16",  extra:25 }, { cod:"L130", extra:25 },
    { cod:"F15",  extra:30 }, { cod:"F25",  extra:30 }, { cod:"L135", extra:30 }, { cod:"P378", extra:30 },
    { cod:"F17",  extra:35 }, { cod:"F18",  extra:35 }, { cod:"F19",  extra:35 },
    { cod:"F21",  extra:35 }, { cod:"F22",  extra:35 }, { cod:"F23",  extra:35 },
    { cod:"L120", extra:35 }, { cod:"L120V",extra:35 }, { cod:"L122", extra:35 },
    { cod:"L129", extra:35 }, { cod:"L136", extra:35 }, { cod:"L143", extra:35 },
    { cod:"P373", extra:35 }, { cod:"V440", extra:35 },
    { cod:"F20",  extra:45 },
    { cod:"L131", extra:45 }, { cod:"L133", extra:45 }, { cod:"L138", extra:45 },
    { cod:"L141", extra:45 }, { cod:"L142", extra:45 },
    { cod:"P370", extra:45 }, { cod:"P375", extra:45 }, { cod:"P377", extra:45 },
    { cod:"L121", extra:55 }, { cod:"L126", extra:55 }, { cod:"L127", extra:55 },
    { cod:"L128", extra:55 }, { cod:"L137", extra:55 }, { cod:"L139N",extra:55 }, { cod:"L139R",extra:55 },
    { cod:"P371", extra:55 }, { cod:"P374", extra:55 }, { cod:"P376", extra:55 }
  ],

  // ── Servizi per Evento ────────────────────────────────────
  servizi: {
    "Battesimo": [
      { gruppo:"Servizio Fotografico", icona:"foto", radio:false, items:[
        { id:"b_f1", nome:"Preparazione a Casa · Rito in chiesa · Foto torta al locale", costo:150 },
        { id:"b_f2", nome:"Permanenza al locale",                                        costo:50  },
        { id:"b_f3", nome:"",                                                            costo:0, editabile:true }
      ]},
      { gruppo:"Servizio Video", icona:"video", radio:true, items:[
        { id:"b_v1", nome:"Riprese e montaggio: Prep. Casa · Rito · Torta al locale",   costo:250 },
        { id:"b_v2", nome:"",                                                            costo:0, editabile:true },
        { id:"b_v0", nome:"Nessun video",                                                costo:0, noVideo:true  }
      ]},
      { gruppo:"Servizi Extra", icona:"extra", radio:false, items:[
        { id:"x_drone", nome:"Drone",                costo:200 },
        { id:"x_pol",   nome:"Polaroid (50 Stampe)", costo:100 },
        { id:"x_trasf", nome:"Trasferta",            costo:50  }
      ]}
    ],

    "18° Compleanno": [
      { gruppo:"Servizio Fotografico", icona:"foto", radio:false, items:[
        { id:"d_f1", nome:"Foto intera festa (no foto regali)", costo:150 },
        { id:"d_f2", nome:"Pre servizio base",                  costo:100 },
        { id:"d_f3", nome:"",                                   costo:0, editabile:true }
      ]},
      { gruppo:"Servizio Video", icona:"video", radio:false, items:[
        { id:"d_v1", nome:"Riprese e montaggio: intera festa",  costo:250 },
        { id:"d_v2", nome:"Riprese e montaggio: preservizio",   costo:100 },
        { id:"d_v3", nome:"",                                   costo:0, editabile:true }
      ]},
      { gruppo:"Servizi Extra", icona:"extra", radio:false, items:[
        { id:"x_drone", nome:"Drone",                costo:200 },
        { id:"x_pol",   nome:"Polaroid (50 Stampe)", costo:100 },
        { id:"x_trasf", nome:"Trasferta",            costo:50  }
      ]}
    ],

    "Matrimonio": [
      { gruppo:"Servizio Fotografico", icona:"foto", radio:false, items:[
        { id:"m_f1", nome:"Pre matrimonio",            costo:100 },
        { id:"m_f2", nome:"Intero servizio",           costo:700 },
        { id:"m_f3", nome:"Preparativi casa sposi",    costo:150 },
        { id:"m_f4", nome:"Cerimonia",                 costo:200 },
        { id:"m_f5", nome:"Esterne",                   costo:200 },
        { id:"m_f6", nome:"Ricevimento",               costo:150 }
      ]},
      { gruppo:"Servizio Video", icona:"video", radio:false, items:[
        { id:"m_v1", nome:"Riprese pre matrimonio",                                          costo:100 },
        { id:"m_v2", nome:"Riprese e montaggio intera giornata wedding",                     costo:500 },
        { id:"m_v3", nome:"Trailer della giornata da proiettare (proiettore escluso)",       costo:100 }
      ]},
      { gruppo:"Servizi Extra", icona:"extra", radio:false, items:[
        { id:"x_drone", nome:"Drone",                costo:200 },
        { id:"x_pol",   nome:"Polaroid (50 Stampe)", costo:100 },
        { id:"x_trasf", nome:"Trasferta",            costo:50  }
      ]}
    ]
  },

  // ── Preset Album per Evento ───────────────────────────────
  // Valori pre-caricati quando si seleziona il tipo evento
  preset_evento: {
    "Matrimonio":      { fmtId:"35x25", pagine:60, boxCod:"C-CL-E-FL-P-N-Z", caparra:200 },
    "Battesimo":       { fmtId:"25x25", pagine:30, boxCod:"G-SE-F",           caparra:50  },
    "18° Compleanno":  { fmtId:"25x25", pagine:40, boxCod:"G-SE-F",           caparra:50  },
    "Comunione":       { fmtId:"25x25", pagine:30, boxCod:"G-SE-F",           caparra:50  },
    "Cresima":         { fmtId:"25x25", pagine:30, boxCod:"G-SE-F",           caparra:50  }
  }

};

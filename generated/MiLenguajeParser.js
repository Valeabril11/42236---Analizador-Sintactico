// Generated from c://Users//Drmal//ANALIZADOR VALEN//MiLenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeListener from './MiLenguajeListener.js';
import MiLenguajeVisitor from './MiLenguajeVisitor.js';

const serializedATN = [4,1,18,88,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,37,8,2,10,2,12,2,40,9,2,1,3,
1,3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,
1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,75,8,
7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,83,8,7,10,7,12,7,86,9,7,1,7,0,1,14,8,0,2,4,
6,8,10,12,14,0,2,1,0,10,11,1,0,12,13,89,0,19,1,0,0,0,2,24,1,0,0,0,4,33,1,
0,0,0,6,46,1,0,0,0,8,49,1,0,0,0,10,55,1,0,0,0,12,61,1,0,0,0,14,74,1,0,0,
0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,
20,22,1,0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,25,5,14,0,0,25,
26,5,15,0,0,26,27,5,1,0,0,27,28,3,4,2,0,28,29,5,2,0,0,29,30,5,3,0,0,30,31,
3,6,3,0,31,32,5,4,0,0,32,3,1,0,0,0,33,38,5,15,0,0,34,35,5,5,0,0,35,37,5,
15,0,0,36,34,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,5,1,0,
0,0,40,38,1,0,0,0,41,45,3,8,4,0,42,45,3,10,5,0,43,45,3,12,6,0,44,41,1,0,
0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,
0,47,7,1,0,0,0,48,46,1,0,0,0,49,50,5,6,0,0,50,51,5,1,0,0,51,52,5,15,0,0,
52,53,5,2,0,0,53,54,5,7,0,0,54,9,1,0,0,0,55,56,5,8,0,0,56,57,5,1,0,0,57,
58,3,14,7,0,58,59,5,2,0,0,59,60,5,7,0,0,60,11,1,0,0,0,61,62,5,15,0,0,62,
63,5,9,0,0,63,64,3,14,7,0,64,65,5,7,0,0,65,13,1,0,0,0,66,67,6,7,-1,0,67,
75,5,16,0,0,68,75,5,17,0,0,69,75,5,15,0,0,70,71,5,1,0,0,71,72,3,14,7,0,72,
73,5,2,0,0,73,75,1,0,0,0,74,66,1,0,0,0,74,68,1,0,0,0,74,69,1,0,0,0,74,70,
1,0,0,0,75,84,1,0,0,0,76,77,10,6,0,0,77,78,7,0,0,0,78,83,3,14,7,7,79,80,
10,5,0,0,80,81,7,1,0,0,81,83,3,14,7,6,82,76,1,0,0,0,82,79,1,0,0,0,83,86,
1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,15,1,0,0,0,86,84,1,0,0,0,7,19,38,
44,46,74,82,84];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "','", "'leer'", 
                            "';'", "'escribir'", "'='", "'*'", "'/'", "'+'", 
                            "'-'", "'funcion'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "FUNCION", 
                             "ID", "NUMERO", "CADENA", "WS" ];
    static ruleNames = [ "prog", "funcion", "parametros", "instrucciones", 
                         "leer", "escribir", "asignacion", "expresion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 16;
	            this.funcion();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(MiLenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiLenguajeParser.RULE_funcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(MiLenguajeParser.FUNCION);
	        this.state = 25;
	        this.match(MiLenguajeParser.ID);
	        this.state = 26;
	        this.match(MiLenguajeParser.T__0);

	        this.state = 27;
	        this.parametros();
	        this.state = 28;
	        this.match(MiLenguajeParser.T__1);
	        this.state = 29;
	        this.match(MiLenguajeParser.T__2);

	        this.state = 30;
	        this.instrucciones();
	        this.state = 31;
	        this.match(MiLenguajeParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(MiLenguajeParser.ID);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 34;
	            this.match(MiLenguajeParser.T__4);
	            this.state = 35;
	            this.match(MiLenguajeParser.ID);
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33088) !== 0)) {
	            this.state = 44;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 6:
	                this.state = 41;
	                this.leer();
	                break;
	            case 8:
	                this.state = 42;
	                this.escribir();
	                break;
	            case 15:
	                this.state = 43;
	                this.asignacion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiLenguajeParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(MiLenguajeParser.T__5);
	        this.state = 50;
	        this.match(MiLenguajeParser.T__0);
	        this.state = 51;
	        this.match(MiLenguajeParser.ID);
	        this.state = 52;
	        this.match(MiLenguajeParser.T__1);
	        this.state = 53;
	        this.match(MiLenguajeParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escribir() {
	    let localctx = new EscribirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiLenguajeParser.RULE_escribir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(MiLenguajeParser.T__7);
	        this.state = 56;
	        this.match(MiLenguajeParser.T__0);
	        this.state = 57;
	        this.expresion(0);
	        this.state = 58;
	        this.match(MiLenguajeParser.T__1);
	        this.state = 59;
	        this.match(MiLenguajeParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiLenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(MiLenguajeParser.ID);
	        this.state = 62;
	        this.match(MiLenguajeParser.T__8);
	        this.state = 63;
	        this.expresion(0);
	        this.state = 64;
	        this.match(MiLenguajeParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, MiLenguajeParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 67;
	            this.match(MiLenguajeParser.NUMERO);
	            break;
	        case 17:
	            localctx = new CadenaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 68;
	            this.match(MiLenguajeParser.CADENA);
	            break;
	        case 15:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 69;
	            this.match(MiLenguajeParser.ID);
	            break;
	        case 1:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 70;
	            this.match(MiLenguajeParser.T__0);
	            this.state = 71;
	            this.expresion(0);
	            this.state = 72;
	            this.match(MiLenguajeParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 84;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 82;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_expresion);
	                    this.state = 76;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 77;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 78;
	                    this.expresion(7);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiLenguajeParser.RULE_expresion);
	                    this.state = 79;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 80;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===12 || _la===13)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 81;
	                    this.expresion(6);
	                    break;

	                } 
	            }
	            this.state = 86;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.T__2 = 3;
MiLenguajeParser.T__3 = 4;
MiLenguajeParser.T__4 = 5;
MiLenguajeParser.T__5 = 6;
MiLenguajeParser.T__6 = 7;
MiLenguajeParser.T__7 = 8;
MiLenguajeParser.T__8 = 9;
MiLenguajeParser.T__9 = 10;
MiLenguajeParser.T__10 = 11;
MiLenguajeParser.T__11 = 12;
MiLenguajeParser.T__12 = 13;
MiLenguajeParser.FUNCION = 14;
MiLenguajeParser.ID = 15;
MiLenguajeParser.NUMERO = 16;
MiLenguajeParser.CADENA = 17;
MiLenguajeParser.WS = 18;

MiLenguajeParser.RULE_prog = 0;
MiLenguajeParser.RULE_funcion = 1;
MiLenguajeParser.RULE_parametros = 2;
MiLenguajeParser.RULE_instrucciones = 3;
MiLenguajeParser.RULE_leer = 4;
MiLenguajeParser.RULE_escribir = 5;
MiLenguajeParser.RULE_asignacion = 6;
MiLenguajeParser.RULE_expresion = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(MiLenguajeParser.EOF, 0);
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(MiLenguajeParser.FUNCION, 0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_parametros;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiLenguajeParser.ID);
	    } else {
	        return this.getToken(MiLenguajeParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_instrucciones;
    }

	leer = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LeerContext);
	    } else {
	        return this.getTypedRuleContext(LeerContext,i);
	    }
	};

	escribir = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscribirContext);
	    } else {
	        return this.getTypedRuleContext(EscribirContext,i);
	    }
	};

	asignacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_leer;
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscribirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_escribir;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterEscribir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitEscribir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitEscribir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.ParensContext = ParensContext;

class NumeroContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(MiLenguajeParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.NumeroContext = NumeroContext;

class MulDivContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.MulDivContext = MulDivContext;

class AddSubContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.AddSubContext = AddSubContext;

class CadenaContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CADENA() {
	    return this.getToken(MiLenguajeParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.CadenaContext = CadenaContext;

class IdContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiLenguajeVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiLenguajeParser.IdContext = IdContext;


MiLenguajeParser.ProgContext = ProgContext; 
MiLenguajeParser.FuncionContext = FuncionContext; 
MiLenguajeParser.ParametrosContext = ParametrosContext; 
MiLenguajeParser.InstruccionesContext = InstruccionesContext; 
MiLenguajeParser.LeerContext = LeerContext; 
MiLenguajeParser.EscribirContext = EscribirContext; 
MiLenguajeParser.AsignacionContext = AsignacionContext; 
MiLenguajeParser.ExpresionContext = ExpresionContext; 

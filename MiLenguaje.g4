grammar MiLenguaje;

// Reglas del parser
prog: funcion* EOF;

funcion: FUNCION ID LPAREN parametros? RPAREN LBRACE instrucciones RBRACE;

parametros: ID (COMA ID)* ;

instrucciones: (leer | escribir | asignacion)* ;

leer: LEER LPAREN ID RPAREN SEMI;

escribir: ESCRIBIR LPAREN expresion RPAREN SEMI;

asignacion: ID ASSIGN expresion SEMI;

expresion:
      expresion op=MUL expresion       # Mul
    | expresion op=DIV expresion       # Div
    | expresion op=PLUS expresion      # Add
    | expresion op=MINUS expresion     # Sub
    | NUMERO                           # numero
    | CADENA                           # cadena
    | ID                               # id
    | LPAREN expresion RPAREN          # parens
    ;

// Reglas del lexer
FUNCION: 'funcion';
LEER: 'leer';
ESCRIBIR: 'escribir';

ID: [a-zA-Z_] [a-zA-Z_0-9]*;
NUMERO: [0-9]+;
CADENA: '"' ( '\\' . | ~[\\\r\n] )* '"';

// Símbolos
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
SEMI: ';';
ASSIGN: '=';
PLUS: '+';
MINUS: '-';
MUL: '*';
DIV: '/';
COMA: ',';

WS: [ \t\r\n]+ -> skip;

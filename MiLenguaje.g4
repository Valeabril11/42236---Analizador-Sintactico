grammar MiLenguaje;

prog: funcion* EOF;

funcion: FUNCION ID '(' (parametros) ')' '{' (instrucciones) '}';

parametros: ID (',' ID)* ;

instrucciones: (leer | escribir | asignacion)* ;

leer: 'leer' '(' ID ')' ';';
escribir: 'escribir' '(' expresion ')' ';';
asignacion: ID '=' expresion ';';

expresion:
      expresion op=('*'|'/') expresion   # MulDiv
    | expresion op=('+'|'-') expresion   # AddSub
    | NUMERO                             # numero
    | CADENA                             # cadena
    | ID                                 # id
    | '(' expresion ')'                  # parens
    ;

FUNCION: 'funcion';
ID: [a-zA-Z_][a-zA-Z_0-9]*;
NUMERO: [0-9]+;
CADENA: '"' ( '\\' . | ~[\\\r\n] )* '"';
WS: [ \t\r\n]+ -> skip;

import MiLenguajeVisitor from './generated/MiLenguajeVisitor.js';

export default class CustomMiLenguajeVisitor extends MiLenguajeVisitor {
  constructor() {
    super();
    this.variables = {};
    this.outputJS = "";
  }

  visitProg(ctx) {
    for (let i = 0; i < ctx.funcion().length; i++) {
      this.visit(ctx.funcion(i));
    }
    return this.outputJS;
  }

  visitFuncion(ctx) {
    const nombre = ctx.ID().getText();
    const paramsCtx = ctx.parametros();
    let params = [];
    if (paramsCtx) {
      for (let i = 0; i < paramsCtx.ID().length; i++) {
        params.push(paramsCtx.ID(i).getText());
      }
    }

    this.outputJS += `function ${nombre}(${params.join(', ')}) {\n`;

    this.visit(ctx.instrucciones());

    this.outputJS += '}\n\n';
  }

  visitInstrucciones(ctx) {
    for (let i = 0; i < ctx.children.length; i++) {
      this.visit(ctx.children[i]);
    }
  }

  visitLeer(ctx) {
    const varName = ctx.ID().getText();
    // Aquí simulamos la lectura con prompt (puedes adaptar según ambiente)
    this.outputJS += `let ${varName} = parseInt(prompt("Ingrese valor para ${varName}:"));\n`;
  }

  visitEscribir(ctx) {
    const expr = this.visit(ctx.expresion());
    this.outputJS += `console.log(${expr});\n`;
  }

  visitAsignacion(ctx) {
    const varName = ctx.ID().getText();
    const expr = this.visit(ctx.expresion());
    this.outputJS += `let ${varName} = ${expr};\n`;
  }

  visitLlamada(ctx) {
    const funcName = ctx.ID().getText();
    let args = [];
    if (ctx.expresion()) {
      for (let i = 0; i < ctx.expresion().length; i++) {
        args.push(this.visit(ctx.expresion(i)));
      }
    }
    this.outputJS += `${funcName}(${args.join(', ')});\n`;
  }

  // Expresiones aritméticas
  visitMul(ctx) {
    return `${this.visit(ctx.expresion(0))} * ${this.visit(ctx.expresion(1))}`;
  }

  visitDiv(ctx) {
    return `${this.visit(ctx.expresion(0))} / ${this.visit(ctx.expresion(1))}`;
  }

  visitAdd(ctx) {
    return `${this.visit(ctx.expresion(0))} + ${this.visit(ctx.expresion(1))}`;
  }

  visitSub(ctx) {
    return `${this.visit(ctx.expresion(0))} - ${this.visit(ctx.expresion(1))}`;
  }

  visitNumero(ctx) {
    return ctx.NUMERO().getText();
  }

  visitCadena(ctx) {
    return ctx.CADENA().getText();
  }

  visitId(ctx) {
    return ctx.ID().getText();
  }

  visitParens(ctx) {
    return `(${this.visit(ctx.expresion())})`;
  }
}

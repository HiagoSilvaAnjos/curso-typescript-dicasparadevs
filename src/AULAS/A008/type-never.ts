function onlyError(): never {
  throw new Error("Erro qualquer");
}

onlyError();

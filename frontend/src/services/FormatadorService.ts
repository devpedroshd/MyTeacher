export const FormatadorService = {
    valorMonetario(valor: number): string {
        return valor.toLocaleString('pt-br', {minimumFractionDigits: 2, style: 'currency', currency: 'brl' });
    }
}
export function generateSlug(text: string): string {
    // Remove acentos
    const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Substitui espaços e símbolos por hífen
    const slug = normalizedText
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-") // Remove múltiplos hífens consecutivos
        .replace(/^-|-$/g, ""); // Remove hífens do início e do fim
    
    return slug;
}
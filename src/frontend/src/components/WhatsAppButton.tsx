import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.button"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white px-4 py-3 rounded-full shadow-xl transition-smooth hover:scale-105 hover:shadow-2xl group"
      style={{ background: "#25D366" }}
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}

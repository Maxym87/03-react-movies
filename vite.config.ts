import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// 5. Создать интерфейс под ответ Респонс
// 6. В этой функции сделать http запрос, результат записать а Стейт
// 7. Интерфейсы и логику запроса вынести в services.ts и types.ts
// 8. Стейт для лоадера
// 9. Стейт для ошибки, перед каждым запросом сбрасывать Фолс в СетОшибки
//

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});

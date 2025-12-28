
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const WishAI: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [wish, setWish] = useState('');
  const [loading, setLoading] = useState(false);

  const generateWish = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Bạn là một người chuyên gia viết lời chúc đám cưới lãng mạn, tinh tế và sâu sắc bằng tiếng Việt. Hãy tạo một lời chúc đám cưới dựa trên ý tưởng sau: "${prompt}". Lời chúc nên ngắn gọn, cảm động và phù hợp để ghi vào thiệp chúc mừng.`,
        config: {
          temperature: 0.8,
          topP: 0.9,
        }
      });
      setWish(response.text || 'Lỗi khi tạo lời chúc. Vui lòng thử lại!');
    } catch (error) {
      console.error(error);
      setWish('Có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-[#c5a47e]">
      <h3 className="text-2xl font-serif-wedding text-[#4a4a4a] mb-6 text-center italic">Gửi Lời Chúc AI Đặc Biệt</h3>
      <div className="flex flex-col gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Nhập cảm xúc của bạn (vđ: Mong hai bạn hạnh phúc, tình yêu bền lâu...)"
          className="w-full p-4 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#c5a47e] focus:outline-none transition-all resize-none h-24"
        />
        <button
          onClick={generateWish}
          disabled={loading || !prompt}
          className="bg-[#c5a47e] text-white py-3 px-8 rounded-xl font-bold hover:bg-[#b38f63] disabled:opacity-50 transition-all shadow-lg active:scale-95"
        >
          {loading ? 'Đang sáng tạo...' : 'Tạo lời chúc bằng AI'}
        </button>
      </div>

      {wish && (
        <div className="mt-8 p-6 bg-[#faf7f2] rounded-xl border border-dashed border-[#c5a47e] animate-in fade-in slide-in-from-top-2 duration-500">
          <p className="text-[#4a4a4a] italic leading-relaxed text-lg">"{wish}"</p>
          <div className="mt-4 flex justify-end">
            <button 
              onClick={() => {navigator.clipboard.writeText(wish)}}
              className="text-[#c5a47e] text-sm hover:underline"
            >
              Sao chép lời chúc
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishAI;

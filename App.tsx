
import React, { useState, useEffect } from 'react';
import { BRIDE_AND_GROOM, LOVE_STORY, GALLERY_IMAGES } from './constants';
import Countdown from './components/Countdown';
import SectionHeading from './components/SectionHeading';
import WishAI from './components/WishAI';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'}`}>
        <div className="font-wedding text-2xl md:text-3xl text-[#c5a47e]">A & B</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#about" className="hover:text-[#c5a47e] transition-colors">Cặp Đôi</a>
          <a href="#story" className="hover:text-[#c5a47e] transition-colors">Câu Chuyện</a>
          <a href="#gallery" className="hover:text-[#c5a47e] transition-colors">Album</a>
          <a href="#venue" className="hover:text-[#c5a47e] transition-colors">Địa Điểm</a>
        </div>
        <button className="bg-[#c5a47e] text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#b38f63] transition-all">RSVP</button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm md:text-lg uppercase tracking-[0.5em] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Save The Date</p>
          <h1 className="font-wedding text-7xl md:text-9xl mb-8 drop-shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Văn A & Thị B
          </h1>
          <div className="mt-12 animate-in fade-in zoom-in duration-1000 delay-700">
            <Countdown />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-white/50 mx-auto"></div>
        </div>
      </section>

      {/* About Couple */}
      <section id="about" className="py-24 bg-[#faf7f2]">
        <SectionHeading title="Cặp Đôi Hạnh Phúc" subtitle="Gặp gỡ cô dâu và chú rể" />
        
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 md:gap-24">
          {BRIDE_AND_GROOM.map((member, index) => (
            <div key={index} className={`flex flex-col items-center group ${index === 1 ? 'md:mt-12' : ''}`}>
              <div className="relative mb-8">
                <div className="w-64 h-80 md:w-80 md:h-[450px] rounded-t-full overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c5a47e] rounded-t-full -z-10 transition-all group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </div>
              <h3 className="font-serif-wedding text-3xl mb-2">{member.name}</h3>
              <p className="text-[#c5a47e] font-wedding text-2xl mb-4">{member.role}</p>
              <p className="text-center text-gray-600 max-w-sm leading-relaxed">{member.description}</p>
              <div className="mt-6 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#c5a47e]/10 flex items-center justify-center text-[#c5a47e] hover:bg-[#c5a47e] hover:text-white transition-all cursor-pointer">f</div>
                <div className="w-8 h-8 rounded-full bg-[#c5a47e]/10 flex items-center justify-center text-[#c5a47e] hover:bg-[#c5a47e] hover:text-white transition-all cursor-pointer">i</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Love Story Timeline */}
      <section id="story" className="py-24 bg-white">
        <SectionHeading title="Câu Chuyện Tình Yêu" subtitle="Hành trình chúng mình bên nhau" />
        
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-[#c5a47e]/30 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24">
            {LOVE_STORY.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl hover:rotate-2 transition-all duration-500">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c5a47e] border-4 border-white shadow-md hidden md:block"></div>

                <div className={`w-full md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <span className="text-[#c5a47e] font-serif-wedding text-lg block mb-2">{event.date}</span>
                  <h4 className="text-2xl font-serif-wedding mb-4">{event.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-24 bg-[#faf7f2]">
        <SectionHeading title="Khoảnh Khắc Kỷ Niệm" subtitle="Album ảnh cưới" />
        
        <div className="max-w-7xl mx-auto px-4 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
              <img src={img} alt="Gallery" className="w-full hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#c5a47e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                  <svg className="w-6 h-6 text-[#c5a47e]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wedding Venue & RSVP */}
      <section id="venue" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="Thời Gian & Địa Điểm" subtitle="Lễ thành hôn & Tiệc cưới" />
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#faf7f2] p-4 rounded-2xl text-[#c5a47e]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif-wedding mb-2">Thứ Năm, 25 Tháng 12, 2025</h4>
                    <p className="text-gray-600">Lễ Thành Hôn: 17:30 - Tiệc Cưới: 18:00</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="bg-[#faf7f2] p-4 rounded-2xl text-[#c5a47e]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif-wedding mb-2">Trung Tâm Tiệc Cưới Luxury Palace</h4>
                    <p className="text-gray-600">Số 123, Đường Lạc Long Quân, Quận Tây Hồ, Hà Nội</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <WishAI />
              </div>
            </div>

            <div className="h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" alt="Venue" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                <h5 className="text-2xl font-wedding mb-2">Đón tiếp quý khách</h5>
                <p className="text-sm uppercase tracking-widest text-white/80">Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2c2c2c] text-white text-center">
        <div className="font-wedding text-4xl mb-6 text-[#c5a47e]">Văn A & Thị B</div>
        <p className="text-gray-400 text-sm tracking-widest uppercase mb-8">Thank you for being part of our story</p>
        <div className="h-[1px] w-24 bg-white/10 mx-auto mb-8"></div>
        <p className="text-xs text-gray-500">© 2025 Created with ❤️ for A & B</p>
      </footer>
      
      {/* Background Decor */}
      <div className="fixed top-20 right-[-100px] w-64 h-64 bg-[#c5a47e]/5 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="fixed bottom-20 left-[-100px] w-80 h-80 bg-[#c5a47e]/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default App;

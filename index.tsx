// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
const App: React.FC = () => {
// Add global styles for animations
React.useEffect(() => {
const style = document.createElement('style');
style.textContent = `
@keyframes twinkle {
0%, 100% { opacity: 0.1; transform: scale(0.8); }
50% { opacity: 1; transform: scale(1.2); }
}
@keyframes float {
0% { transform: translateY(0) rotate(0deg) scale(1); }
25% { transform: translateY(-15px) rotate(90deg) scale(1.1); }
50% { transform: translateY(0) rotate(180deg) scale(1); }
75% { transform: translateY(15px) rotate(270deg) scale(0.9); }
100% { transform: translateY(0) rotate(360deg) scale(1); }
}
@keyframes cardReveal {
0% { transform: scale(0.5) translateY(50px) rotate(-10deg); opacity: 0; }
50% { transform: scale(1.1) translateY(-10px) rotate(5deg); opacity: 0.8; }
100% { transform: scale(1) translateY(0) rotate(0deg); opacity: 1; }
}
@keyframes glowPulse {
0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.2), 0 0 40px rgba(147, 51, 234, 0.1); }
50% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(147, 51, 234, 0.2); }
}
@keyframes constellationGlow {
0%, 100% { opacity: 0.3; filter: blur(2px); }
50% { opacity: 0.8; filter: blur(0px); }
}
@keyframes runeFloat {
0% { transform: translateY(0) rotate(0deg); filter: brightness(1); }
50% { transform: translateY(-10px) rotate(5deg); filter: brightness(1.5); }
100% { transform: translateY(0) rotate(0deg); filter: brightness(1); }
}
@keyframes fortuneWheelSpin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
return () => {
document.head.removeChild(style);
};
}, []);
const [currentScreen, setCurrentScreen] = useState('home');
const [selectedCategory, setSelectedCategory] = useState('');
const [userQuestion, setUserQuestion] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [prediction, setPrediction] = useState('');
const [selectedCards, setSelectedCards] = useState<string[]>([]);
const handleCategorySelect = (category: string) => {
setSelectedCategory(category);
setCurrentScreen('spread');
};
const handleStartReading = () => {
setIsLoading(true);
setCurrentScreen('prediction');
// Simulate card selection and prediction generation
setTimeout(() => {
const cards = ['Маг', 'Императрица', 'Колесо Фортуны'];
setSelectedCards(cards);
setPrediction('Звезды говорят о грядущих переменах в вашей жизни. Карта Мага указывает на вашу внутреннюю силу и способность воплощать желания в реальность. Императрица символизирует плодородие и творческую энергию, которая скоро проявится в ваших делах. Колесо Фортуны предвещает поворот судьбы к лучшему - удача будет на вашей стороне в ближайшие недели.');
setIsLoading(false);
}, 3000);
};
const renderHomeScreen = () => (
<div className="min-h-screen bg-gradient-to-b from-[#0D0B1F] via-[#1A0B2E] to-[#0D0B1F] relative overflow-hidden">
{/* Mystical background elements */}
<div className="absolute inset-0">
{/* Stars */}
<div className="absolute inset-0">
{/* Stars and constellations */}
{[...Array(50)].map((_, i) => (
<div
key={i}
className={`absolute ${i % 3 === 0 ? 'w-2 h-2' : 'w-1 h-1'} bg-yellow-300/80 rounded-full`}
style={{
top: `${Math.random() * 100}%`,
left: `${Math.random() * 100}%`,
animation: `twinkle ${2 + Math.random() * 3}s infinite`,
animationDelay: `${Math.random() * 3}s`
}}
>
{i % 5 === 0 && (
<div className="absolute w-20 h-20 -top-10 -left-10">
<div className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent animate-pulse"
style={{ animationDuration: '3s' }}></div>
</div>
)}
</div>
))}
{/* Constellation lines */}
<svg className="absolute inset-0 w-full h-full opacity-20" style={{ animation: 'constellationGlow 4s infinite' }}>
<line x1="20%" y1="20%" x2="30%" y2="30%" className="stroke-yellow-300/30" strokeWidth="0.5" />
<line x1="30%" y1="30%" x2="40%" y2="25%" className="stroke-yellow-300/30" strokeWidth="0.5" />
<line x1="60%" y1="60%" x2="70%" y2="65%" className="stroke-yellow-300/30" strokeWidth="0.5" />
<line x1="70%" y1="65%" x2="80%" y2="60%" className="stroke-yellow-300/30" strokeWidth="0.5" />
</svg>
{/* Magical runes */}
{[...Array(8)].map((_, i) => (
<div
key={`rune-${i}`}
className="absolute text-yellow-300/20 text-2xl"
style={{
top: `${Math.random() * 100}%`,
left: `${Math.random() * 100}%`,
animation: `runeFloat ${3 + Math.random() * 2}s infinite`,
animationDelay: `${Math.random() * 2}s`
}}
>
{['ᚠ', 'ᚹ', 'ᚻ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ'][i]}
</div>
))}
</div>
{/* Magical symbols */}
<div className="absolute inset-0">
{[...Array(8)].map((_, i) => (
<div
key={i}
className="absolute opacity-10 text-yellow-300/30 animate-float"
style={{
top: `${Math.random() * 100}%`,
left: `${Math.random() * 100}%`,
animationDelay: `${Math.random() * 5}s`,
animationDuration: `${10 + Math.random() * 5}s`
}}
>
<i className={`fas fa-${['moon', 'star', 'sun', 'infinity'][i % 4]} text-2xl`}></i>
</div>
))}
</div>
{/* Smoke effect */}
<div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNGRkQ3MDAxMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
</div>
{/* Mystical smoke effect */}
<div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/10 to-transparent opacity-50"></div>
<div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-6 py-8">
{/* Logo */}
<div className="text-center mt-8">
<h1 className="text-3xl font-bold text-yellow-300 mb-2" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}>
Оракул Судьбы
</h1>
<p className="text-sm text-yellow-200/80 mb-3 italic" style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' }}>
Мудрость Таро, пробуждённая Искусственным Интеллектом
</p>
<div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto"></div>
</div>
{/* Main navigation buttons */}
<div className="flex-1 flex flex-col justify-center space-y-4 w-full max-w-xs">
<Button
onClick={() => handleCategorySelect('daily')}
className="!rounded-button bg-slate-800/70 border border-yellow-300/50 text-yellow-100 hover:bg-slate-700/70 hover:border-yellow-300 transition-all duration-500 h-14 text-lg backdrop-blur-sm cursor-pointer group relative overflow-hidden"
style={{
boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)',
animation: 'glowPulse 2s infinite'
}}
>
<div className="absolute inset-0 bg-gradient-to-r from-yellow-300/0 via-yellow-300/10 to-yellow-300/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
<i className="fas fa-sun mr-3 text-yellow-300"></i>
Карта дня
</Button>
<Button
onClick={() => handleCategorySelect('relationships')}
className="!rounded-button bg-slate-800/70 border border-yellow-300/50 text-yellow-100 hover:bg-slate-700/70 hover:border-yellow-300 transition-all duration-300 h-14 text-lg backdrop-blur-sm cursor-pointer"
style={{ boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)' }}
>
<i className="fas fa-heart mr-3 text-red-400"></i>
Отношения
</Button>
<Button
onClick={() => handleCategorySelect('finances')}
className="!rounded-button bg-slate-800/70 border border-yellow-300/50 text-yellow-100 hover:bg-slate-700/70 hover:border-yellow-300 transition-all duration-300 h-14 text-lg backdrop-blur-sm cursor-pointer"
style={{ boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)' }}
>
<i className="fas fa-coins mr-3 text-yellow-300"></i>
Финансы
</Button>
<Button
onClick={() => handleCategorySelect('question')}
className="!rounded-button bg-slate-800/70 border border-yellow-300/50 text-yellow-100 hover:bg-slate-700/70 hover:border-yellow-300 transition-all duration-300 h-14 text-lg backdrop-blur-sm cursor-pointer"
style={{ boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)' }}
>
<i className="fas fa-crystal-ball mr-3 text-purple-400"></i>
Задать вопрос
</Button>
<Button
onClick={() => setCurrentScreen('history')}
className="!rounded-button bg-slate-800/70 border border-yellow-300/50 text-yellow-100 hover:bg-slate-700/70 hover:border-yellow-300 transition-all duration-300 h-14 text-lg backdrop-blur-sm cursor-pointer"
style={{ boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)' }}
>
<i className="fas fa-scroll mr-3 text-amber-400"></i>
История
</Button>
<Button
onClick={() => setCurrentScreen('help')}
className="!rounded-button bg-slate-800/70 border border-yellow-300/50 text-yellow-100 hover:bg-slate-700/70 hover:border-yellow-300 transition-all duration-300 h-14 text-lg backdrop-blur-sm cursor-pointer"
style={{ boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)' }}
>
<i className="fas fa-book mr-3 text-emerald-400"></i>
Помощь
</Button>
</div>
{/* Balance indicator */}
<div className="bg-slate-800/50 border border-silver-400/30 rounded-lg px-4 py-2 backdrop-blur-sm">
<div className="flex items-center space-x-2">
<i className="fas fa-gem text-purple-400"></i>
<span className="text-silver-200 text-sm">Баланс: 5 кредитов</span>
</div>
</div>
</div>
</div>
);
const renderSpreadScreen = () => (
<div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
{/* Background effects */}
<div className="absolute inset-0 opacity-20">
<div className="absolute top-10 left-10 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
<div className="absolute top-20 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
<div className="absolute bottom-20 left-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-2000"></div>
</div>
<div className="relative z-10 flex flex-col min-h-screen px-6 py-8">
{/* Header */}
<div className="flex items-center justify-between mb-8">
<Button
onClick={() => setCurrentScreen('home')}
className="!rounded-button bg-transparent border-none text-yellow-300 hover:text-yellow-100 cursor-pointer"
>
<i className="fas fa-arrow-left text-xl"></i>
</Button>
<h2 className="text-xl font-bold text-yellow-300" style={{ fontFamily: 'Playfair Display, serif' }}>
{selectedCategory === 'daily' && 'Карта дня'}
{selectedCategory === 'relationships' && 'Отношения'}
{selectedCategory === 'finances' && 'Финансы'}
{selectedCategory === 'question' && 'Ваш вопрос'}
</h2>
<div className="w-8"></div>
</div>
{/* Spread types carousel */}
<div className="mb-8">
<h3 className="text-lg text-yellow-100 mb-4 text-center">Выберите тип расклада</h3>
<div className="flex space-x-4 overflow-x-auto pb-4">
<div className="min-w-[120px] bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 text-center backdrop-blur-sm cursor-pointer hover:border-yellow-300 transition-all">
<i className="fas fa-eye text-2xl text-purple-400 mb-2"></i>
<p className="text-yellow-100 text-sm">Простой</p>
<p className="text-gray-400 text-xs">1 карта</p>
</div>
<div className="min-w-[120px] bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 text-center backdrop-blur-sm cursor-pointer hover:border-yellow-300 transition-all">
<i className="fas fa-triangle text-2xl text-emerald-400 mb-2"></i>
<p className="text-yellow-100 text-sm">Треугольник</p>
<p className="text-gray-400 text-xs">3 карты</p>
</div>
<div className="min-w-[120px] bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 text-center backdrop-blur-sm cursor-pointer hover:border-yellow-300 transition-all">
<i className="fas fa-plus text-2xl text-red-400 mb-2"></i>
<p className="text-yellow-100 text-sm">Крест</p>
<p className="text-gray-400 text-xs">5 карт</p>
</div>
</div>
</div>
{/* Question input */}
<div className="mb-8">
<label className="block text-yellow-100 mb-3 text-lg">Задайте свой вопрос звездам</label>
<div className="relative">
<Input
value={userQuestion}
onChange={(e) => setUserQuestion(e.target.value)}
placeholder="Что вас беспокоит? Звезды дадут ответ..."
className="bg-slate-800/70 border border-yellow-300/50 text-yellow-100 placeholder-gray-400 rounded-lg h-12 px-4 pr-12 backdrop-blur-sm focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300"
/>
<i className="fas fa-magic absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400"></i>
</div>
</div>
{/* Deck shuffling animation area */}
<div className="flex-1 flex items-center justify-center mb-8">
<div className="text-center">
<img
src="https://readdy.ai/api/search-image?query=mystical%20tarot%20card%20deck%20with%20ornate%20back%20design%2C%20dark%20purple%20and%20gold%20colors%2C%20magical%20symbols%2C%20ancient%20mystical%20patterns%2C%20centered%20composition%2C%20isolated%20on%20dark%20background%2C%20high%20detail%2C%20fantasy%20art%20style&width=200&height=300&seq=tarot-deck-001&orientation=portrait"
alt="Колода Таро"
className="w-32 h-48 mx-auto mb-4 rounded-lg shadow-lg"
style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)' }}
/>
<p className="text-gray-400 text-sm">Колода готова к гаданию</p>
</div>
</div>
{/* Start reading button */}
<Button
onClick={handleStartReading}
className="!rounded-button bg-gradient-to-r from-purple-600 to-purple-800 border border-yellow-300 text-yellow-100 hover:from-purple-500 hover:to-purple-700 transition-all duration-300 h-14 text-lg font-semibold cursor-pointer"
style={{ boxShadow: '0 0 25px rgba(147, 51, 234, 0.4)' }}
>
<i className="fas fa-sparkles mr-3"></i>
Начать расклад
</Button>
</div>
</div>
);
const renderPredictionScreen = () => (
<div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
{/* Background effects */}
<div className="absolute inset-0 opacity-30">
<div className="absolute top-10 left-10 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
<div className="absolute top-20 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
<div className="absolute bottom-20 left-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-2000"></div>
</div>
<div className="relative z-10 flex flex-col min-h-screen px-6 py-8">
{/* Header */}
<div className="flex items-center justify-between mb-8">
<Button
onClick={() => setCurrentScreen('spread')}
className="!rounded-button bg-transparent border-none text-yellow-300 hover:text-yellow-100 cursor-pointer"
>
<i className="fas fa-arrow-left text-xl"></i>
</Button>
<h2 className="text-xl font-bold text-yellow-300" style={{ fontFamily: 'Playfair Display, serif' }}>
Ваше предсказание
</h2>
<div className="w-8"></div>
</div>
{isLoading ? (
/* Loading animation */
<div className="flex-1 flex items-center justify-center">
<div className="text-center">
<div className="relative w-48 h-48 mx-auto mb-6">
<div className="absolute inset-0 bg-gradient-radial from-purple-500/20 to-transparent animate-pulse"></div>
<div className="absolute inset-4 border-4 border-yellow-300/30 rounded-full"
style={{ animation: 'fortuneWheelSpin 8s linear infinite' }}>
{[...Array(12)].map((_, i) => (
<div
key={i}
className="absolute w-1 h-8 bg-yellow-300/50"
style={{
transform: `rotate(${i * 30}deg)`,
transformOrigin: 'bottom center',
left: 'calc(50% - 2px)',
bottom: '50%'
}}
></div>
))}
<div className="absolute inset-8 border-2 border-yellow-300/50 rounded-full flex items-center justify-center">
<i className="fas fa-moon text-yellow-300/80 text-2xl animate-spin"
style={{ animationDuration: '4s' }}></i>
</div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-8">
<div className="w-4 h-4 bg-yellow-300 transform rotate-45"></div>
</div>
</div>
<h3 className="text-xl text-yellow-300 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
Колесо Фортуны вращается...
</h3>
<p className="text-yellow-100/70">
<i className="fas fa-sparkles mr-2 animate-pulse"></i>
Звезды раскрывают тайны вашей судьбы
</p>
</div>
</div>
) : (
/* Prediction results */
<ScrollArea className="flex-1">
{/* Cards display */}
<div className="mb-8">
<h3 className="text-lg text-yellow-100 mb-4 text-center">Выпавшие карты</h3>
<div className="flex justify-center space-x-4 mb-6">
{selectedCards.map((card, index) => (
<div key={index} className="text-center" style={{
animation: 'cardReveal 0.8s ease-out forwards',
animationDelay: `${index * 0.3}s`
}}>
<img
src={`https://readdy.ai/api/search-image?query=mystical%20tarot%20card%20$%7Bcard%7D%20with%20ornate%20design%2C%20dark%20purple%20and%20gold%20colors%2C%20magical%20symbols%2C%20ancient%20mystical%20artwork%2C%20centered%20composition%2C%20isolated%20on%20dark%20background%2C%20high%20detail%20fantasy%20art%20style&width=120&height=180&seq=card-${index}&orientation=portrait`}
alt={card}
className="w-20 h-30 rounded-lg shadow-lg mb-2 cursor-pointer hover:scale-105 transition-transform duration-500"
style={{
boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
animation: 'glowPulse 2s infinite'
}}
/>
<p className="text-yellow-100 text-sm">{card}</p>
</div>
))}
</div>
</div>
{/* Prediction text */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-6 backdrop-blur-sm mb-8">
<div className="flex items-center mb-4">
<i className="fas fa-eye text-purple-400 mr-3 text-xl"></i>
<h3 className="text-lg text-yellow-300" style={{ fontFamily: 'Playfair Display, serif' }}>
Послание от Оракула
</h3>
</div>
<p className="text-yellow-100 leading-relaxed text-base">
{prediction}
</p>
</div>
{/* Action buttons */}
<div className="space-y-3 mb-8">
<Button
className="!rounded-button w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 cursor-pointer"
>
<i className="fas fa-save mr-3"></i>
Сохранить предсказание
</Button>
<Button
onClick={() => setCurrentScreen('home')}
className="!rounded-button w-full bg-slate-700 hover:bg-slate-600 text-yellow-100 border border-yellow-300/50 h-12 cursor-pointer"
>
<i className="fas fa-redo mr-3"></i>
Новый расклад
</Button>
<Button
className="!rounded-button w-full bg-blue-600 hover:bg-blue-700 text-white h-12 cursor-pointer"
>
<i className="fas fa-share mr-3"></i>
Поделиться
</Button>
</div>
</ScrollArea>
)}
</div>
</div>
);
const renderHistoryScreen = () => (
<div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
<div className="relative z-10 flex flex-col min-h-screen px-6 py-8">
{/* Header */}
<div className="flex items-center justify-between mb-8">
<Button
onClick={() => setCurrentScreen('home')}
className="!rounded-button bg-transparent border-none text-yellow-300 hover:text-yellow-100 cursor-pointer"
>
<i className="fas fa-arrow-left text-xl"></i>
</Button>
<h2 className="text-xl font-bold text-yellow-300" style={{ fontFamily: 'Playfair Display, serif' }}>
История гаданий
</h2>
<div className="w-8"></div>
</div>
{/* History list */}
<ScrollArea className="flex-1">
<div className="space-y-4">
{/* History item 1 */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 backdrop-blur-sm cursor-pointer hover:border-yellow-300 transition-all">
<div className="flex items-start space-x-4">
<div className="flex space-x-1">
<div className="w-8 h-12 bg-purple-600 rounded-sm"></div>
<div className="w-8 h-12 bg-emerald-600 rounded-sm"></div>
<div className="w-8 h-12 bg-red-600 rounded-sm"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h3 className="text-yellow-100 font-medium">Отношения</h3>
<span className="text-gray-400 text-sm">15 дек 2024</span>
</div>
<p className="text-gray-300 text-sm mb-2">Вопрос о будущем отношений с партнером</p>
<p className="text-yellow-100 text-xs">Карты: Влюбленные, Двойка Кубков, Солнце</p>
</div>
</div>
</div>
{/* History item 2 */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 backdrop-blur-sm cursor-pointer hover:border-yellow-300 transition-all">
<div className="flex items-start space-x-4">
<div className="w-8 h-12 bg-yellow-600 rounded-sm"></div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h3 className="text-yellow-100 font-medium">Карта дня</h3>
<span className="text-gray-400 text-sm">14 дек 2024</span>
</div>
<p className="text-gray-300 text-sm mb-2">Ежедневное предсказание</p>
<p className="text-yellow-100 text-xs">Карта: Маг</p>
</div>
</div>
</div>
{/* History item 3 */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 backdrop-blur-sm cursor-pointer hover:border-yellow-300 transition-all">
<div className="flex items-start space-x-4">
<div className="flex space-x-1">
<div className="w-8 h-12 bg-green-600 rounded-sm"></div>
<div className="w-8 h-12 bg-purple-600 rounded-sm"></div>
<div className="w-8 h-12 bg-blue-600 rounded-sm"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h3 className="text-yellow-100 font-medium">Финансы</h3>
<span className="text-gray-400 text-sm">13 дек 2024</span>
</div>
<p className="text-gray-300 text-sm mb-2">Финансовые перспективы на месяц</p>
<p className="text-yellow-100 text-xs">Карты: Туз Пентаклей, Десятка Пентаклей, Колесо Фортуны</p>
</div>
</div>
</div>
</div>
</ScrollArea>
</div>
</div>
);
const renderHelpScreen = () => (
<div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
<div className="relative z-10 flex flex-col min-h-screen px-6 py-8">
{/* Header */}
<div className="flex items-center justify-between mb-8">
<Button
onClick={() => setCurrentScreen('home')}
className="!rounded-button bg-transparent border-none text-yellow-300 hover:text-yellow-100 cursor-pointer"
>
<i className="fas fa-arrow-left text-xl"></i>
</Button>
<h2 className="text-xl font-bold text-yellow-300" style={{ fontFamily: 'Playfair Display, serif' }}>
Помощь
</h2>
<div className="w-8"></div>
</div>
{/* Help content */}
<ScrollArea className="flex-1">
<div className="space-y-6">
{/* FAQ item 1 */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 backdrop-blur-sm">
<h3 className="text-yellow-300 font-medium mb-2 flex items-center">
<i className="fas fa-question-circle mr-2"></i>
Как работает гадание?
</h3>
<p className="text-yellow-100 text-sm leading-relaxed">
Наш ИИ-Оракул анализирует выпавшие карты Таро и создает персонализированное предсказание на основе древней мудрости карт и современных алгоритмов.
</p>
</div>
{/* FAQ item 2 */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 backdrop-blur-sm">
<h3 className="text-yellow-300 font-medium mb-2 flex items-center">
<i className="fas fa-gem mr-2"></i>
Что такое кредиты?
</h3>
<p className="text-yellow-100 text-sm leading-relaxed">
Кредиты используются для получения платных раскладов. Каждый новый пользователь получает 5 бесплатных кредитов. Дополнительные кредиты можно приобрести.
</p>
</div>
{/* FAQ item 3 */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 backdrop-blur-sm">
<h3 className="text-yellow-300 font-medium mb-2 flex items-center">
<i className="fas fa-save mr-2"></i>
Как сохранить предсказание?
</h3>
<p className="text-yellow-100 text-sm leading-relaxed">
После получения предсказания нажмите кнопку "Сохранить". Все сохраненные гадания доступны в разделе "История".
</p>
</div>
{/* FAQ item 4 */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 backdrop-blur-sm">
<h3 className="text-yellow-300 font-medium mb-2 flex items-center">
<i className="fas fa-magic mr-2"></i>
Типы раскладов
</h3>
<p className="text-yellow-100 text-sm leading-relaxed">
• Простой (1 карта) - быстрый ответ на конкретный вопрос<br/>
• Треугольник (3 карты) - прошлое, настоящее, будущее<br/>
• Крест (5 карт) - детальный анализ ситуации
</p>
</div>
{/* Contact */}
<div className="bg-slate-800/70 border border-yellow-300/50 rounded-lg p-4 backdrop-blur-sm">
<h3 className="text-yellow-300 font-medium mb-2 flex items-center">
<i className="fas fa-envelope mr-2"></i>
Поддержка
</h3>
<p className="text-yellow-100 text-sm leading-relaxed">
Если у вас есть вопросы или предложения, напишите нам: support@oracledestiny.ru
</p>
</div>
</div>
</ScrollArea>
</div>
</div>
);
return (
<div className="w-full max-w-sm mx-auto bg-slate-900 text-white" style={{ height: '762px' }}>
{currentScreen === 'home' && renderHomeScreen()}
{currentScreen === 'spread' && renderSpreadScreen()}
{currentScreen === 'prediction' && renderPredictionScreen()}
{currentScreen === 'history' && renderHistoryScreen()}
{currentScreen === 'help' && renderHelpScreen()}
</div>
);
};
export default App
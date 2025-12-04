import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Сайт-визитка',
      description: 'Научитесь создавать стильные визитки для бизнеса и личного бренда',
      icon: 'User',
      gradient: 'from-primary to-primary/60',
    },
    {
      id: 2,
      title: 'Лендинг',
      description: 'Мастерство создания продающих одностраничных сайтов с высокой конверсией',
      icon: 'Rocket',
      gradient: 'from-secondary to-secondary/60',
    },
    {
      id: 3,
      title: 'Промо-сайт',
      description: 'Креативные многостраничные сайты для масштабных рекламных кампаний',
      icon: 'Sparkles',
      gradient: 'from-primary to-secondary',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
      
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">KipR9</h1>
          <div className="flex gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Курсы
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
                Веб-дизайнер
              </span>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-extrabold mb-8 leading-none">
              <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                KipR9
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl font-light">
              Научу создавать{' '}
              <span className="text-primary font-medium">невероятные сайты</span>{' '}
              с нуля за 3 интенсивных курса
            </p>

            <div className="flex gap-4 mb-20">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
              >
                Начать обучение
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/50 hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32" id="courses">
            <div className="col-span-full mb-12 animate-slide-up">
              <h3 className="text-5xl font-bold mb-4">
                Программа обучения
              </h3>
              <p className="text-xl text-muted-foreground">
                Три курса от простого к сложному
              </p>
            </div>

            {courses.map((course, index) => (
              <Card
                key={course.id}
                className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-6 transition-transform duration-300 ${hoveredCourse === course.id ? 'scale-110 rotate-6' : ''}`}>
                    <Icon name={course.icon as any} size={32} className="text-white" />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold">
                      {course.title}
                    </h4>
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      0{course.id}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-32 text-center animate-fade-in" id="about">
            <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20">
              <Icon name="Award" size={48} className="mx-auto mb-6 text-primary" />
              <h3 className="text-4xl font-bold mb-6">
                Почему KipR9?
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Я создаю не просто курсы — я передаю опыт и страсть к веб-дизайну. 
                Каждый студент получает персональную обратную связь и доступ 
                к эксклюзивному сообществу профессионалов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2024 KipR9. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Telegram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

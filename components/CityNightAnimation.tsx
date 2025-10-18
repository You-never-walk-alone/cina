import React, { useEffect, useRef } from 'react';

interface Building {
  x: number;
  width: number;
  height: number;
  color: string;
  windows: Array<{ x: number; y: number; width: number; height: number; lit: boolean }>;
}

interface Car {
  x: number;
  y: number;
  speed: number;
  color: string;
  width: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
}

const CityNightAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  
  const buildings = useRef<Building[]>([]);
  const cars = useRef<Car[]>([]);
  const stars = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置Canvas尺寸
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      initializeScene();
    };

    // 初始化场景
    const initializeScene = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      // 初始化建筑物
      buildings.current = [];
      let x = 0;
      while (x < width) {
        const buildingWidth = Math.random() * 80 + 40;
        const buildingHeight = Math.random() * (height * 0.6) + (height * 0.2);
        const buildingColor = `hsl(${200 + Math.random() * 20}, 30%, ${10 + Math.random() * 10}%)`;
        
        const windows = [];
        const windowWidth = 8;
        const windowHeight = 12;
        const windowSpacing = 15;
        
        for (let wx = 10; wx < buildingWidth - 10; wx += windowSpacing) {
          for (let wy = 20; wy < buildingHeight - 20; wy += windowSpacing) {
            if (Math.random() > 0.3) { // 70%的窗户亮着
              windows.push({
                x: wx,
                y: wy,
                width: windowWidth,
                height: windowHeight,
                lit: Math.random() > 0.1 // 90%的亮窗保持亮着
              });
            }
          }
        }
        
        buildings.current.push({
          x,
          width: buildingWidth,
          height: buildingHeight,
          color: buildingColor,
          windows
        });
        
        x += buildingWidth + Math.random() * 30;
      }

      // 初始化车辆
      cars.current = [];
      for (let i = 0; i < 8; i++) {
        cars.current.push({
          x: Math.random() * width,
          y: height - 40,
          speed: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 60}, 80%, 60%)`,
          width: Math.random() * 20 + 15
        });
      }

      // 初始化星星
      stars.current = [];
      for (let i = 0; i < 100; i++) {
        stars.current.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.3),
          size: Math.random() * 2 + 0.5,
          brightness: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.05 + 0.02
        });
      }
    };

    // 绘制场景
    const drawScene = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      // 清除画布
      ctx.fillStyle = '#0a0a14';
      ctx.fillRect(0, 0, width, height);
      
      // 绘制渐变夜空
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0a0a14');
      gradient.addColorStop(1, '#1a1a2e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // 绘制星星
      stars.current.forEach(star => {
        star.brightness += star.twinkleSpeed;
        if (star.brightness > 1 || star.brightness < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // 绘制建筑物
      buildings.current.forEach(building => {
        // 建筑物主体
        ctx.fillStyle = building.color;
        ctx.fillRect(building.x, height - building.height, building.width, building.height);
        
        // 窗户
        building.windows.forEach(window => {
          if (window.lit || Math.random() > 0.98) { // 偶尔闪烁
            const brightness = Math.random() * 0.4 + 0.6;
            ctx.fillStyle = `rgba(255, 255, ${Math.random() > 0.5 ? 200 : 100}, ${brightness})`;
            ctx.fillRect(
              building.x + window.x,
              height - building.height + window.y,
              window.width,
              window.height
            );
          }
        });
      });
      
      // 绘制道路
      ctx.fillStyle = '#2a2a3a';
      ctx.fillRect(0, height - 30, width, 30);
      
      // 绘制道路标线
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 15]);
      ctx.beginPath();
      ctx.moveTo(0, height - 15);
      ctx.lineTo(width, height - 15);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // 绘制车辆
      cars.current.forEach(car => {
        car.x += car.speed;
        if (car.x > width + car.width) {
          car.x = -car.width;
        }
        
        // 车体
        ctx.fillStyle = car.color;
        ctx.fillRect(car.x, car.y, car.width, 12);
        
        // 车灯
        ctx.fillStyle = 'rgba(255, 255, 200, 0.8)';
        ctx.fillRect(car.x + car.width - 5, car.y + 2, 3, 3);
        
        // 车窗
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(car.x + 3, car.y + 2, car.width - 8, 4);
      });
      
      // 绘制月亮
      ctx.fillStyle = 'rgba(255, 255, 220, 0.9)';
      ctx.beginPath();
      ctx.arc(width - 80, 60, 25, 0, Math.PI * 2);
      ctx.fill();
      
      // 月亮光晕
      const moonGlow = ctx.createRadialGradient(width - 80, 60, 25, width - 80, 60, 50);
      moonGlow.addColorStop(0, 'rgba(255, 255, 220, 0.3)');
      moonGlow.addColorStop(1, 'rgba(255, 255, 220, 0)');
      ctx.fillStyle = moonGlow;
      ctx.fillRect(width - 130, 10, 100, 100);
    };

    // 动画循环
    const animate = () => {
      drawScene();
      animationRef.current = requestAnimationFrame(animate);
    };

    // 初始化
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    // 清理函数
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default CityNightAnimation;
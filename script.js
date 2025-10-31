// Market Events Scenario Bank
const MARKET_EVENTS = [
    {
        id: 1,
        title: "Tech Stocks Rally",
        description: "Major technology companies report strong earnings, driving up stock prices across the sector.",
        stockChange: 5,
        bondChange: 0,
        etfChange: 3,
        mentorExplanation: "Your tech-heavy portfolio benefited. This is sector exposure—great for gains but risky if tech drops.",
        conceptName: "Sector Diversification",
        conceptDefinition: "Spreading investments across sectors reduces exposure to one industry.",
        advice: "Balance sectors for stability."
    },
    {
        id: 2,
        title: "Interest Rates Rise",
        description: "The Federal Reserve raises interest rates to combat inflation, affecting bond and stock markets.",
        stockChange: -2,
        bondChange: -4,
        etfChange: -1,
        mentorExplanation: "Bonds fell due to interest rate risk—higher rates make older bonds less attractive.",
        conceptName: "Interest Rate Risk",
        conceptDefinition: "Bond prices fall when rates rise.",
        advice: "Hold shorter-duration bonds in rising-rate environments."
    },
    {
        id: 3,
        title: "Economic Recession",
        description: "Economic indicators point to a recession, causing widespread market uncertainty and volatility.",
        stockChange: -8,
        bondChange: 2,
        etfChange: -4,
        mentorExplanation: "Diversification cushions downturns—your bonds softened losses.",
        conceptName: "Asset Allocation",
        conceptDefinition: "Mixing assets can reduce risk.",
        advice: "Keep defensive assets in downturns."
    },
    {
        id: 4,
        title: "Dividend Season",
        description: "Many companies announce increased dividend payments, rewarding shareholders.",
        stockChange: 2,
        bondChange: 1,
        etfChange: 1.5,
        mentorExplanation: "Dividends provide steady income; reinvesting them compounds returns.",
        conceptName: "Dividend Reinvestment",
        conceptDefinition: "Using dividends to buy more shares grows wealth.",
        advice: "Reinvest to accelerate compounding."
    },
    {
        id: 5,
        title: "Oil Price Spike",
        description: "Geopolitical tensions cause oil prices to surge, impacting energy-dependent industries.",
        stockChange: -3,
        bondChange: -1,
        etfChange: -2,
        mentorExplanation: "Energy costs impact profits—watch global commodity prices.",
        conceptName: "Commodity Price Risk",
        conceptDefinition: "Certain industries react strongly to raw material prices.",
        advice: "Limit exposure to affected sectors."
    },
    {
        id: 6,
        title: "Tech Regulation Fears",
        description: "Government announces potential new regulations on major technology companies.",
        stockChange: -6,
        bondChange: 0,
        etfChange: -3,
        mentorExplanation: "Overexposure to one sector magnifies risk.",
        conceptName: "Concentration Risk",
        conceptDefinition: "Too much in one area increases volatility.",
        advice: "Diversify holdings."
    },
    {
        id: 7,
        title: "Consumer Spending Boom",
        description: "Strong consumer confidence leads to increased spending and retail growth.",
        stockChange: 4,
        bondChange: 0,
        etfChange: 3,
        mentorExplanation: "Healthy economies lift equities—risk pays off here.",
        conceptName: "Economic Cycles",
        conceptDefinition: "Stock performance often follows consumer demand.",
        advice: "Increase equity exposure in expansions."
    },
    {
        id: 8,
        title: "Federal Stimulus",
        description: "Government announces a major economic stimulus package to boost growth.",
        stockChange: 3,
        bondChange: -1,
        etfChange: 2,
        mentorExplanation: "Stimulus boosts markets but may cause inflation.",
        conceptName: "Fiscal Policy",
        conceptDefinition: "Government spending can influence markets.",
        advice: "Balance growth with inflation hedges."
    },
    {
        id: 9,
        title: "Inflation Spike",
        description: "Consumer prices rise sharply, eroding purchasing power and affecting investments.",
        stockChange: -2,
        bondChange: -5,
        etfChange: -3,
        mentorExplanation: "Inflation erodes bond value—stocks sometimes hedge.",
        conceptName: "Inflation Risk",
        conceptDefinition: "Rising prices reduce purchasing power.",
        advice: "Consider real assets or inflation-protected securities."
    },
    {
        id: 10,
        title: "Housing Market Crash",
        description: "Real estate prices plummet, affecting banks and construction companies.",
        stockChange: -4,
        bondChange: 1,
        etfChange: -2,
        mentorExplanation: "Diversifying across sectors limits impact.",
        conceptName: "Market Segmentation",
        conceptDefinition: "Different markets react differently to shocks.",
        advice: "Keep broad exposure."
    },
    {
        id: 11,
        title: "Strong Earnings Season",
        description: "Corporate earnings exceed expectations across multiple industries.",
        stockChange: 6,
        bondChange: 0,
        etfChange: 4,
        mentorExplanation: "Profits drive stock prices—good quarter!",
        conceptName: "Earnings Growth",
        conceptDefinition: "Company profits are a key driver of stock returns.",
        advice: "Look for strong fundamentals."
    },
    {
        id: 12,
        title: "Supply Chain Disruption",
        description: "Global supply chain issues cause shortages and increased costs for businesses.",
        stockChange: -5,
        bondChange: 0,
        etfChange: -3,
        mentorExplanation: "Unexpected events create volatility—keep a safety buffer.",
        conceptName: "Event Risk",
        conceptDefinition: "Sudden events impact performance.",
        advice: "Maintain liquidity."
    },
    {
        id: 13,
        title: "Crypto Market Boom",
        description: "Cryptocurrency prices surge, creating spillover effects in traditional markets.",
        stockChange: 2,
        bondChange: 0,
        etfChange: 1,
        mentorExplanation: "Speculative assets can surge but are volatile.",
        conceptName: "Speculation Risk",
        conceptDefinition: "High gains come with high risk.",
        advice: "Limit speculative exposure."
    },
    {
        id: 14,
        title: "Global Pandemic",
        description: "A health crisis disrupts global economic activity and market stability.",
        stockChange: -12,
        bondChange: 3,
        etfChange: -7,
        mentorExplanation: "Safe assets shine in crises.",
        conceptName: "Flight to Safety",
        conceptDefinition: "Investors move to safer assets in uncertainty.",
        advice: "Keep safe havens in your portfolio."
    },
    {
        id: 15,
        title: "Corporate Scandal",
        description: "Major corporate fraud is exposed, shaking investor confidence.",
        stockChange: -7,
        bondChange: -1,
        etfChange: -4,
        mentorExplanation: "Company risk can drag markets.",
        conceptName: "Corporate Governance",
        conceptDefinition: "Ethical management protects shareholder value.",
        advice: "Research before investing."
    },
    {
        id: 16,
        title: "Breakthrough Innovation",
        description: "Revolutionary technology breakthrough promises to transform industries.",
        stockChange: 8,
        bondChange: 0,
        etfChange: 5,
        mentorExplanation: "Innovation drives growth.",
        conceptName: "Growth Investing",
        conceptDefinition: "Betting on innovators can pay off.",
        advice: "Balance growth with stability."
    },
    {
        id: 17,
        title: "Currency Crisis",
        description: "Major currency devaluation affects international trade and investments.",
        stockChange: -3,
        bondChange: -2,
        etfChange: -3,
        mentorExplanation: "Currency instability affects global markets.",
        conceptName: "FX Risk",
        conceptDefinition: "Exchange rates impact investments.",
        advice: "Diversify internationally."
    },
    {
        id: 18,
        title: "IPO Frenzy",
        description: "Multiple high-profile companies go public, creating market excitement.",
        stockChange: 4,
        bondChange: 0,
        etfChange: 2,
        mentorExplanation: "New offerings bring excitement and volatility.",
        conceptName: "IPO Risk",
        conceptDefinition: "Initial offerings are unpredictable.",
        advice: "Be selective with IPOs."
    },
    {
        id: 19,
        title: "Natural Disaster",
        description: "Major natural disaster disrupts regional economic activity.",
        stockChange: -4,
        bondChange: 0,
        etfChange: -2,
        mentorExplanation: "Local shocks can ripple through markets.",
        conceptName: "Geographic Risk",
        conceptDefinition: "Location matters in investing.",
        advice: "Diversify globally."
    },
    {
        id: 20,
        title: "Tech Bubble Burst",
        description: "Overvalued technology stocks crash as reality sets in.",
        stockChange: -10,
        bondChange: 1,
        etfChange: -6,
        mentorExplanation: "Overvaluations eventually correct.",
        conceptName: "Market Bubbles",
        conceptDefinition: "Prices can exceed true value before crashing.",
        advice: "Avoid herd mentality."
    }
];

// Financial Literacy Simulation Game
// Ensure modals are hidden on initial load. Defined as a regular function so
// it can run before the class is instantiated (avoids breaking the script
// if method syntax was invalid). This hides the testimonials modal which
// otherwise is visible by default in the HTML.
function ensureModalsHiddenOnLoad() {
    const modalIds = [
        'about-modal',
        'settings-modal',
        'leaderboard-modal',
        'game-over-modal',
        'testimonials-modal'
    ];
    modalIds.forEach(id => {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'none';
    });
}
class FinancialGame {
    constructor() {
        this.gameState = {
            month: 1,
            portfolioValue: 10000,
            cash: 10000,
            stocks: 0,
            bonds: 0,
            etfs: 0,
            allocation: { stocks: 0, bonds: 0, etfs: 0, cash: 100 },
            history: [{ month: 0, value: 10000 }],
            usedEvents: []
        };

        // Real market data configuration
        this.marketData = {
            lastUpdate: null,
            stocks: { symbol: 'SPY', price: 0, change: 0, name: 'S&P 500 ETF' },
            bonds: { symbol: 'TLT', price: 0, change: 0, name: '20+ Year Treasury Bond ETF' },
            etfs: { symbol: 'VTI', price: 0, change: 0, name: 'Total Stock Market ETF' },
            isLoading: false,
            useRealData: true,
            fallbackToSimulated: true
        };

        // API configuration with working demo key
        this.apiConfig = {
            key: 'RIBXT3XYLI0KEZJV', // Working demo key for educational use
            baseUrl: 'https://www.alphavantage.co/query'
        };

        this.chart = null;
        this.init();
    }

    init() {
        this.loadGameState();
        this.loadApiKey();
        this.setupEventListeners();
        this.checkGameState();
        this.initChart();
        this.initAllocationChart();
        this.createParticles();
        this.fetchMarketData(); // Load real market data
    // Hide modals on load (use global function)
    ensureModalsHiddenOnLoad();

    }

    loadApiKey() {
        const savedKey = localStorage.getItem('investsim_api_key');
        if (savedKey) {
            this.apiConfig.key = savedKey;
        }
    }

    async fetchMarketData() {
        if (!this.marketData.useRealData) return;

        // Check if we need to update (once per day)
        const today = new Date().toDateString();
        if (this.marketData.lastUpdate === today) return;

        this.marketData.isLoading = true;
        this.showMarketDataStatus('Loading real market data...');

        try {
            // Fetch data for all three asset types
            const symbols = ['SPY', 'TLT', 'VTI'];
            const promises = symbols.map(symbol => this.fetchSymbolData(symbol));
            const results = await Promise.all(promises);

            // Update market data
            this.marketData.stocks = { ...this.marketData.stocks, ...results[0] };
            this.marketData.bonds = { ...this.marketData.bonds, ...results[1] };
            this.marketData.etfs = { ...this.marketData.etfs, ...results[2] };

            this.marketData.lastUpdate = today;
            this.marketData.isLoading = false;

            this.showMarketDataStatus('✅ Real market data loaded!');
            this.updateMarketDataDisplay();

        } catch (error) {
            console.warn('Failed to fetch real market data, using simulated data:', error);
            this.marketData.useRealData = false;
            this.marketData.isLoading = false;
            this.showMarketDataStatus('📊 Using simulated market data');
        }
    }

    async fetchSymbolData(symbol) {
        // Using Alpha Vantage API (free tier)
        const url = `${this.apiConfig.baseUrl}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${this.apiConfig.key}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data['Global Quote']) {
                const quote = data['Global Quote'];
                const price = parseFloat(quote['05. price']);
                const changePercent = parseFloat(quote['10. change percent'].replace('%', ''));

                return {
                    price: price,
                    change: changePercent,
                    lastUpdate: new Date().toISOString()
                };
            } else {
                throw new Error('Invalid API response');
            }
        } catch (error) {
            // Fallback to simulated data
            return {
                price: Math.random() * 100 + 100,
                change: (Math.random() - 0.5) * 10,
                lastUpdate: new Date().toISOString()
            };
        }
    }

    showMarketDataStatus(message) {
        // Show status in the header
        const header = document.querySelector('.game-header .header-left');
        if (header) {
            let statusElement = document.getElementById('market-data-status');
            if (!statusElement) {
                statusElement = document.createElement('div');
                statusElement.id = 'market-data-status';
                statusElement.className = 'market-data-status';
                header.appendChild(statusElement);
            }
            statusElement.textContent = message;

            // Auto-hide after 3 seconds
            setTimeout(() => {
                if (statusElement) {
                    statusElement.style.opacity = '0';
                    setTimeout(() => {
                        if (statusElement && statusElement.parentNode) {
                            statusElement.parentNode.removeChild(statusElement);
                        }
                    }, 500);
                }
            }, 3000);
        }
    }

    updateMarketDataDisplay() {
        // Update the market data indicators in the UI
        const marketIndicator = document.getElementById('market-indicator');
        if (marketIndicator) {
            marketIndicator.innerHTML = `
                <div class="market-data-item">
                    <span class="symbol">SPY</span>
                    <span class="change ${this.marketData.stocks.change >= 0 ? 'positive' : 'negative'}">
                        ${this.marketData.stocks.change >= 0 ? '+' : ''}${this.marketData.stocks.change.toFixed(2)}%
                    </span>
                </div>
                <div class="market-data-item">
                    <span class="symbol">TLT</span>
                    <span class="change ${this.marketData.bonds.change >= 0 ? 'positive' : 'negative'}">
                        ${this.marketData.bonds.change >= 0 ? '+' : ''}${this.marketData.bonds.change.toFixed(2)}%
                    </span>
                </div>
                <div class="market-data-item">
                    <span class="symbol">VTI</span>
                    <span class="change ${this.marketData.etfs.change >= 0 ? 'positive' : 'negative'}">
                        ${this.marketData.etfs.change >= 0 ? '+' : ''}${this.marketData.etfs.change.toFixed(2)}%
                    </span>
                </div>
            `;
        }
    }

    showTutorialSlide(slideNumber) {
        // Hide all slides
        document.querySelectorAll('.tutorial-slide').forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the requested slide
        const targetSlide = document.getElementById(`tutorial-slide-${slideNumber}`);
        if (targetSlide) {
            targetSlide.classList.add('active');
        }
    }

    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        // Create floating particles for welcome screen
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random size and position
            const size = Math.random() * 12 + 4;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';

            particlesContainer.appendChild(particle);
        }
    }

    checkGameState() {
        // Show welcome screen for new players
        if (this.gameState.month === 1 && this.gameState.portfolioValue === 10000 && this.gameState.history.length === 1) {
            document.getElementById('welcome-screen').style.display = 'flex';
            document.getElementById('game-container').style.display = 'none';
        } else {
            document.getElementById('welcome-screen').style.display = 'none';
            document.getElementById('game-container').style.display = 'block';
            this.updateDisplay();
            // Reinitialize charts when returning to game
            setTimeout(() => {
                this.initChart();
                this.initAllocationChart();
            }, 100);
        }
    }

    setupEventListeners() {
        // Welcome screen
        document.getElementById('start-game-btn').addEventListener('click', () => this.startGame());
        document.getElementById('about-btn').addEventListener('click', () => this.showAbout());
        document.getElementById('testimonials-btn').addEventListener('click', () => this.showTestimonials());
        document.getElementById('leaderboard-btn').addEventListener('click', () => this.showLeaderboard());
        document.getElementById('settings-btn').addEventListener('click', () => this.showSettings());
        // Tutorial navigation is handled by global functions

        // Strategy presets
        document.querySelectorAll('.preset-card').forEach(card => {
            card.addEventListener('click', () => this.selectPreset(card.dataset.preset));
        });

        // Allocation sliders with auto-balancing
        const sliders = ['stocks', 'bonds', 'etfs'];
        sliders.forEach(asset => {
            const slider = document.getElementById(`${asset}-slider`);
            slider.addEventListener('input', () => this.updateSlidersWithAutoBalance(asset));
        });

        // Cash slider (read-only in custom mode, but still need listener for display)
        const cashSlider = document.getElementById('cash-slider');
        if (cashSlider) {
            cashSlider.addEventListener('input', () => {
                // Only allow manual cash changes if not in auto mode
                if (!cashSlider.disabled) {
                    this.updateSliders('cash');
                }
            });
        }

        // Game controls
        const nextMonthBtn = document.getElementById('next-month-btn');
        const continueLearningBtn = document.getElementById('continue-learning-btn');
        const changeStrategyBtn = document.getElementById('change-strategy-btn');
        const restartBtn = document.getElementById('restart-btn');
        const leaderboardBtn = document.getElementById('leaderboard-btn');

        if (nextMonthBtn) nextMonthBtn.addEventListener('click', () => this.nextMonth());
        if (continueLearningBtn) continueLearningBtn.addEventListener('click', () => this.continueFromResults());
        if (changeStrategyBtn) changeStrategyBtn.addEventListener('click', () => this.changeStrategy());
        if (restartBtn) restartBtn.addEventListener('click', () => this.restartGame());
        if (leaderboardBtn) leaderboardBtn.addEventListener('click', () => this.showLeaderboard());

        // Modal controls
        document.getElementById('save-score-btn').addEventListener('click', () => this.saveScore());
        document.getElementById('play-again-btn').addEventListener('click', () => this.restartGame());

        // Close modals
        document.querySelectorAll('.close').forEach(close => {
            close.addEventListener('click', (e) => {
                e.target.closest('.modal').style.display = 'none';
            });
        });

        // Close modals on background click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    updateSliders() {
        const sliders = {
            stocks: document.getElementById('stocks-slider'),
            bonds: document.getElementById('bonds-slider'),
            etfs: document.getElementById('etfs-slider'),
            cash: document.getElementById('cash-slider')
        };

        const values = {
            stocks: parseInt(sliders.stocks.value),
            bonds: parseInt(sliders.bonds.value),
            etfs: parseInt(sliders.etfs.value),
            cash: parseInt(sliders.cash.value)
        };

        // Update display values with percentage sign
        Object.keys(values).forEach(asset => {
            const valueElement = document.getElementById(`${asset}-value`);
            if (valueElement) {
                valueElement.textContent = values[asset] + '%';
            }
        });

        this.updateAllocationTotal();

        // Update allocation chart if it exists
        if (this.allocationChart) {
            this.allocationChart.data.datasets[0].data = [
                values.stocks, values.bonds, values.etfs, values.cash
            ];
            this.allocationChart.update('none');
        }
    }

    updateSlidersWithAutoBalance(changedAsset) {
        const sliders = {
            stocks: document.getElementById('stocks-slider'),
            bonds: document.getElementById('bonds-slider'),
            etfs: document.getElementById('etfs-slider'),
            cash: document.getElementById('cash-slider')
        };

        const values = {
            stocks: parseInt(sliders.stocks.value),
            bonds: parseInt(sliders.bonds.value),
            etfs: parseInt(sliders.etfs.value)
        };

        // Auto-calculate cash to make total 100%
        const totalOthers = values.stocks + values.bonds + values.etfs;
        const cashValue = Math.max(0, 100 - totalOthers);

        // Update cash slider and display
        sliders.cash.value = cashValue;
        values.cash = cashValue;

        // Update all display values with percentage sign and animations
        Object.keys(values).forEach(asset => {
            const valueElement = document.getElementById(`${asset}-value`);
            if (valueElement) {
                valueElement.textContent = values[asset] + '%';

                // Add animation for changed values
                if (asset === changedAsset || asset === 'cash') {
                    valueElement.style.animation = 'countUp 0.3s ease';
                    setTimeout(() => {
                        valueElement.style.animation = '';
                    }, 300);
                }
            }
        });

        this.updateAllocationTotal();

        // Update allocation chart with smooth animation
        if (this.allocationChart) {
            this.allocationChart.data.datasets[0].data = [
                values.stocks, values.bonds, values.etfs, values.cash
            ];
            this.allocationChart.update('active');
        }
    }

    startGame() {
        // Show full-screen tutorial when starting the game
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('tutorial-screen').style.display = 'flex';
        currentTutorialSlide = 1;
        this.showTutorialSlide(1);
        updateTutorialNavigation();
    }

    showTutorial() {
        document.getElementById('tutorial-screen').style.display = 'flex';
        currentTutorialSlide = 1;
        this.showTutorialSlide(1);
        updateTutorialNavigation();
    }

    showAbout() {
        document.getElementById('about-modal').style.display = 'flex';
    }

    showTestimonials() {
        document.getElementById('testimonials-modal').style.display = 'flex';
    }

    showSettings() {
        document.getElementById('settings-modal').style.display = 'flex';
        this.updateSettingsModal();

        // Add event listener for API key saving
        const saveBtn = document.getElementById('save-api-key');
        const apiInput = document.getElementById('api-key-input');

        if (saveBtn && apiInput) {
            saveBtn.onclick = () => {
                const apiKey = apiInput.value.trim();
                if (apiKey) {
                    this.apiConfig.key = apiKey;
                    localStorage.setItem('investsim_api_key', apiKey);
                    this.showMarketDataStatus('API key saved! Refreshing market data...');
                    this.fetchMarketData();
                } else {
                    alert('Please enter a valid API key');
                }
            };

            // Load saved API key
            const savedKey = localStorage.getItem('investsim_api_key');
            if (savedKey) {
                apiInput.value = savedKey;
            }
        }
    }

    updateSettingsModal() {
        const statusModal = document.getElementById('market-data-status-modal');
        if (statusModal) {
            const statusText = statusModal.querySelector('.status-text');
            if (statusText) {
                if (this.marketData.isLoading) {
                    statusText.textContent = '⏳ Loading real market data...';
                    statusText.className = 'status-text loading';
                } else if (this.marketData.useRealData && this.marketData.lastUpdate) {
                    statusText.textContent = '✅ Real market data active!';
                    statusText.className = 'status-text active';
                } else {
                    statusText.textContent = '📊 Using simulated market data';
                    statusText.className = 'status-text simulated';
                }
            }
        }
    }

    startGameFromTutorial() {
        document.getElementById('tutorial-screen').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';

        // Initialize everything properly
        setTimeout(() => {
            this.updateDisplay();
            this.initChart();
            this.initAllocationChart();
        }, 100);
    }

    selectPreset(presetType) {
        // Remove previous selection with animation
        document.querySelectorAll('.preset-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Select current preset with animation
        const selectedCard = document.querySelector(`[data-preset="${presetType}"]`);
        selectedCard.classList.add('selected');

        const presets = {
            conservative: { stocks: 20, bonds: 60, etfs: 10, cash: 10 },
            balanced: { stocks: 40, bonds: 30, etfs: 25, cash: 5 },
            aggressive: { stocks: 70, bonds: 10, etfs: 15, cash: 5 },
            custom: { stocks: 0, bonds: 0, etfs: 0, cash: 100 }
        };

        const customAllocation = document.getElementById('custom-allocation');

        if (presetType === 'custom') {
            // Show custom allocation with animation
            customAllocation.style.display = 'block';
            customAllocation.style.opacity = '0';
            customAllocation.style.transform = 'translateY(20px)';

            setTimeout(() => {
                customAllocation.style.opacity = '1';
                customAllocation.style.transform = 'translateY(0)';
                customAllocation.style.transition = 'all 0.5s ease';
            }, 50);

            // Make cash slider read-only and add visual indicator
            const cashContainer = document.querySelector('.slider-container:last-child');
            const cashSlider = document.getElementById('cash-slider');
            cashContainer.classList.add('cash-auto');
            cashSlider.disabled = true;

            this.setAllocation(presets[presetType]);
        } else {
            // Hide custom allocation with animation
            if (customAllocation.style.display !== 'none') {
                customAllocation.style.opacity = '0';
                customAllocation.style.transform = 'translateY(-20px)';

                setTimeout(() => {
                    customAllocation.style.display = 'none';
                }, 300);
            }

            // Remove cash auto styling and re-enable slider
            const cashContainer = document.querySelector('.slider-container:last-child');
            const cashSlider = document.getElementById('cash-slider');
            if (cashContainer) cashContainer.classList.remove('cash-auto');
            if (cashSlider) cashSlider.disabled = false;

            const preset = presets[presetType];
            this.setAllocationWithAnimation(preset);
        }

        // Enable continue button with animation
        const nextBtn = document.getElementById('next-month-btn');
        nextBtn.disabled = false;

        // Only set to "Start Month 1" if we're actually at month 1
        if (this.gameState.month === 1) {
            nextBtn.textContent = '🚀 Start Month 1';
        } else {
            nextBtn.textContent = `🚀 Continue to Month ${this.gameState.month}`;
        }

        nextBtn.style.animation = 'pulse 0.6s ease';

        setTimeout(() => {
            nextBtn.style.animation = '';
        }, 600);
    }

    showGuidedResults(event, previousValue) {
        // Hide game interface and show results screen
        const gameContainer = document.getElementById('game-container');
        const resultsScreen = document.getElementById('results-screen');

        if (!gameContainer || !resultsScreen) {
            console.error('Missing required elements for results screen');
            throw new Error('Required elements not found');
        }

        gameContainer.style.display = 'none';
        resultsScreen.style.display = 'flex';

        // Update month title
        const monthTitle = document.getElementById('results-month-title');
        const nextMonthNumber = document.getElementById('next-month-number');

        if (monthTitle) monthTitle.textContent = `Month ${this.gameState.month - 1} Results`;
        if (nextMonthNumber) nextMonthNumber.textContent = this.gameState.month;

        // Show portfolio change
        const currentValue = this.gameState.portfolioValue;
        const change = currentValue - previousValue;

        const portfolioBefore = document.getElementById('portfolio-before');
        const portfolioAfter = document.getElementById('portfolio-after');

        if (portfolioBefore) portfolioBefore.textContent = `$${Math.round(previousValue).toLocaleString()}`;
        if (portfolioAfter) portfolioAfter.textContent = `$${Math.round(currentValue).toLocaleString()}`;

        const changeElement = document.getElementById('change-amount');
        const directionElement = document.getElementById('change-direction');

        if (changeElement && directionElement) {
            if (change >= 0) {
                changeElement.textContent = `+$${Math.round(change).toLocaleString()}`;
                changeElement.className = 'change-amount positive';
                directionElement.textContent = '📈';
            } else {
                changeElement.textContent = `-$${Math.round(Math.abs(change)).toLocaleString()}`;
                changeElement.className = 'change-amount negative';
                directionElement.textContent = '📉';
            }
        }

        // Show event information in simple terms
        const eventTitleBig = document.getElementById('event-title-big');
        const eventDescriptionSimple = document.getElementById('event-description-simple');

        if (eventTitleBig) eventTitleBig.textContent = event.title;
        if (eventDescriptionSimple) eventDescriptionSimple.textContent = this.simplifyEventDescription(event);

        // Show investment impact breakdown
        this.showInvestmentImpact(event);

        // Show learning content
        const conceptTitle = document.getElementById('concept-title');
        const conceptExplanation = document.getElementById('concept-explanation');
        const nextMonthAdvice = document.getElementById('next-month-advice');

        if (conceptTitle) conceptTitle.textContent = `Concept: ${event.conceptName}`;
        if (conceptExplanation) conceptExplanation.textContent = this.simplifyConceptDefinition(event.conceptDefinition);
        if (nextMonthAdvice) nextMonthAdvice.textContent = event.advice;

        // Check if game should end
        const continueBtn = document.getElementById('continue-learning-btn');
        if (this.gameState.month >= 12 && continueBtn) {
            continueBtn.textContent = 'See Final Results! 🏆';
        }
    }

    simplifyEventDescription(event) {
        // Convert complex descriptions to teen-friendly language
        const simplifications = {
            'Tech Stocks Rally': 'Technology companies did really well this month, so their stock prices went up!',
            'Interest Rates Rise': 'The government made it more expensive to borrow money, which affected investments.',
            'Economic Recession': 'The economy slowed down, making people more careful with their money.',
            'Dividend Season': 'Companies shared their profits with investors who own their stocks.',
            'Oil Price Spike': 'Oil became more expensive, which affected many businesses.',
            'Tech Regulation Fears': 'People worried that the government might make new rules for tech companies.',
            'Consumer Spending Boom': 'People were buying lots of stuff, which was good for businesses.',
            'Federal Stimulus': 'The government gave money to help the economy grow.',
            'Inflation Spike': 'Everything became more expensive to buy.',
            'Housing Market Crash': 'House prices dropped a lot, affecting the whole economy.',
            'Strong Earnings Season': 'Companies made more money than expected.',
            'Supply Chain Disruption': 'Companies had trouble getting the materials they needed.',
            'Crypto Market Boom': 'Digital currencies like Bitcoin became very popular.',
            'Global Pandemic': 'A worldwide health crisis affected all businesses.',
            'Corporate Scandal': 'A big company got in trouble for doing something wrong.',
            'Breakthrough Innovation': 'Someone invented something amazing that could change everything.',
            'Currency Crisis': 'Money from other countries became worth less.',
            'IPO Frenzy': 'Lots of companies started selling their stocks to the public.',
            'Natural Disaster': 'A natural disaster hurt businesses in that area.',
            'Tech Bubble Burst': 'Tech company stocks that were overpriced suddenly dropped.'
        };

        return simplifications[event.title] || event.description;
    }

    simplifyConceptDefinition(definition) {
        // Make concept definitions more understandable for teens
        return definition.replace(/portfolio/g, 'your investments')
                        .replace(/assets/g, 'investments')
                        .replace(/securities/g, 'investments')
                        .replace(/volatility/g, 'price changes')
                        .replace(/diversification/g, 'spreading your money around');
    }

    showInvestmentImpact(event) {
        const breakdown = document.getElementById('impact-breakdown');
        if (!breakdown) {
            console.error('Impact breakdown element not found');
            return;
        }
        breakdown.innerHTML = '';

        const impacts = [
            { name: '📈 Your Stocks', change: event.stockChange, amount: this.gameState.stocks },
            { name: '🏛️ Your Bonds', change: event.bondChange, amount: this.gameState.bonds },
            { name: '📊 Your ETFs', change: event.etfChange, amount: this.gameState.etfs },
            { name: '💵 Your Cash', change: 0, amount: this.gameState.cash }
        ];

        impacts.forEach(impact => {
            if (impact.amount > 0) {
                const item = document.createElement('div');
                item.className = 'impact-item';

                const dollarChange = (impact.amount * impact.change) / 100;
                const changeText = impact.change === 0 ? 'No change' :
                    `${impact.change > 0 ? '+' : ''}${impact.change}% = ${dollarChange > 0 ? '+' : ''}$${Math.round(Math.abs(dollarChange)).toLocaleString()}`;

                item.innerHTML = `
                    <div class="impact-asset">${impact.name}</div>
                    <div class="impact-change ${impact.change >= 0 ? 'positive' : 'negative'}">${changeText}</div>
                `;

                breakdown.appendChild(item);
            }
        });
    }

    continueFromResults() {
        // Close the overlay
        const overlay = document.getElementById('month-report-overlay');
        if (overlay) {
            overlay.remove();
        }

        // Check if game is over
        if (this.gameState.month >= 12) {
            this.endGame();
            return;
        }

        // Update display
        this.updateDisplay();
    }

    showSimpleReport(event, previousValue) {
        // Calculate performance metrics
        const currentValue = this.gameState.portfolioValue;
        const change = currentValue - previousValue;
        const changePercent = ((change / previousValue) * 100).toFixed(1);
        const isPositive = change >= 0;

        // Create overlay HTML
        const overlayHTML = `
            <div class="month-report-overlay" id="month-report-overlay">
                <div class="report-content">
                    <div class="report-header">
                        <h1>Month ${this.gameState.month - 1} Results</h1>
                        <div class="performance-summary ${isPositive ? 'positive' : 'negative'}">
                            <div class="performance-emoji">${isPositive ? '📈' : '📉'}</div>
                            <div class="performance-text">
                                <h2>${isPositive ? 'Great job!' : 'Learning opportunity!'}</h2>
                                <p>You ${isPositive ? 'gained' : 'lost'} <strong>$${Math.abs(change).toLocaleString()}</strong> this month (${changePercent}%)</p>
                            </div>
                        </div>
                    </div>

                    <div class="portfolio-comparison">
                        <div class="before-after">
                            <div class="value-box">
                                <h3>Started With</h3>
                                <div class="value">$${Math.round(previousValue).toLocaleString()}</div>
                            </div>
                            <div class="arrow">${isPositive ? '📈' : '📉'}</div>
                            <div class="value-box">
                                <h3>Ended With</h3>
                                <div class="value">$${Math.round(currentValue).toLocaleString()}</div>
                            </div>
                        </div>
                    </div>

                    <div class="event-explanation">
                        <h2>📰 What Happened ${event.isRealData ? '(Real Market Data!)' : ''}</h2>
                        <div class="event-card ${event.isRealData ? 'real-data' : ''}">
                            <h3>${event.title}</h3>
                            <p>${this.simplifyEventDescription(event)}</p>
                            ${event.isRealData ? `<div class="real-data-badge">📊 Based on actual market performance from ${event.date}</div>` : ''}
                        </div>
                    </div>

                    <div class="investment-breakdown">
                        <h2>💼 Your Investments</h2>
                        <div class="breakdown-list">
                            ${this.generateInvestmentBreakdown(event)}
                        </div>
                    </div>

                    <div class="learning-section">
                        <h2>🤖 What You Learned</h2>
                        <div class="learning-card">
                            <h3>${event.conceptName}</h3>
                            <p>${this.simplifyConceptDefinition(event.conceptDefinition)}</p>
                            <div class="advice">
                                <strong>💡 For Next Month:</strong> ${event.advice}
                            </div>
                        </div>
                    </div>

                    <div class="action-buttons">
                        <button class="btn-secondary" onclick="gameInstance.changeStrategy()">📊 Change Strategy</button>
                        <button class="btn-primary" onclick="gameInstance.continueFromResults()">
                            ${this.gameState.month >= 12 ? 'See Final Results! 🏆' : `Continue to Month ${this.gameState.month} 🚀`}
                        </button>
                    </div>

                    <div class="progress-info">
                        <span>Month ${this.gameState.month - 1} of 12 complete</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${((this.gameState.month - 1) / 12) * 100}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add overlay to body
        document.body.insertAdjacentHTML('beforeend', overlayHTML);

        // Show overlay with animation
        setTimeout(() => {
            const overlay = document.getElementById('month-report-overlay');
            if (overlay) {
                overlay.classList.add('show');
            }
        }, 100);
    }

    generateInvestmentBreakdown(event) {
        const investments = [
            { name: '📈 Stocks', change: event.stockChange, amount: this.gameState.stocks },
            { name: '🏛️ Bonds', change: event.bondChange, amount: this.gameState.bonds },
            { name: '📊 ETFs', change: event.etfChange, amount: this.gameState.etfs },
            { name: '💵 Cash', change: 0, amount: this.gameState.cash }
        ];

        return investments
            .filter(inv => inv.amount > 0)
            .map(inv => {
                const dollarChange = (inv.amount * inv.change) / 100;
                const changeText = inv.change === 0 ? 'No change' :
                    `${inv.change > 0 ? '+' : ''}${inv.change}% = ${dollarChange > 0 ? '+' : ''}$${Math.round(Math.abs(dollarChange)).toLocaleString()}`;

                return `
                    <div class="breakdown-item">
                        <span class="investment-name">${inv.name}</span>
                        <span class="investment-amount">$${Math.round(inv.amount).toLocaleString()}</span>
                        <span class="investment-change ${inv.change >= 0 ? 'positive' : 'negative'}">${changeText}</span>
                    </div>
                `;
            }).join('');
    }

    updateReportHeader(change, changePercent, isPositive) {
        const monthTitle = document.getElementById('results-month-title');
        const performanceSummary = document.getElementById('performance-summary');

        if (monthTitle) {
            monthTitle.textContent = `Month ${this.gameState.month - 1} Complete!`;
        }

        if (performanceSummary) {
            const emoji = isPositive ? '📈' : '📉';
            const status = isPositive ? 'Great job!' : 'Learning opportunity!';
            const verb = isPositive ? 'gained' : 'lost';

            performanceSummary.innerHTML = `
                <div class="performance-emoji">${emoji}</div>
                <div class="performance-text">
                    <h2>${status}</h2>
                    <p>You ${verb} <strong>$${Math.abs(change).toLocaleString()}</strong> this month (${changePercent}%)</p>
                </div>
            `;
            performanceSummary.className = `performance-summary ${isPositive ? 'positive' : 'negative'}`;
        }
    }

    updatePortfolioComparison(previousValue, currentValue, change, isPositive) {
        const portfolioBefore = document.getElementById('portfolio-before');
        const portfolioAfter = document.getElementById('portfolio-after');
        const changeAmount = document.getElementById('change-amount');
        const changeDirection = document.getElementById('change-direction');

        if (portfolioBefore) portfolioBefore.textContent = `$${Math.round(previousValue).toLocaleString()}`;
        if (portfolioAfter) portfolioAfter.textContent = `$${Math.round(currentValue).toLocaleString()}`;

        if (changeAmount && changeDirection) {
            changeAmount.textContent = `${isPositive ? '+' : '-'}$${Math.abs(change).toLocaleString()}`;
            changeAmount.className = `change-amount ${isPositive ? 'positive' : 'negative'}`;
            changeDirection.textContent = isPositive ? '📈' : '📉';
        }
    }

    updateEventExplanation(event) {
        const eventTitle = document.getElementById('event-title-big');
        const eventDescription = document.getElementById('event-description-simple');
        const eventImpact = document.getElementById('event-impact');

        if (eventTitle) eventTitle.textContent = event.title;
        if (eventDescription) eventDescription.textContent = this.simplifyEventDescription(event);

        if (eventImpact) {
            const impactText = this.getEventImpactText(event);
            eventImpact.innerHTML = `
                <h3>📊 Market Impact</h3>
                <p>${impactText}</p>
            `;
        }
    }

    getEventImpactText(event) {
        const impacts = [];
        if (event.stockChange !== 0) impacts.push(`Stocks ${event.stockChange > 0 ? 'rose' : 'fell'} by ${Math.abs(event.stockChange)}%`);
        if (event.bondChange !== 0) impacts.push(`Bonds ${event.bondChange > 0 ? 'rose' : 'fell'} by ${Math.abs(event.bondChange)}%`);
        if (event.etfChange !== 0) impacts.push(`ETFs ${event.etfChange > 0 ? 'rose' : 'fell'} by ${Math.abs(event.etfChange)}%`);

        if (impacts.length === 0) return "This event didn't directly affect investment prices.";
        return impacts.join(', ') + '.';
    }

    updateInvestmentBreakdown(event) {
        const breakdown = document.getElementById('impact-breakdown');
        if (!breakdown) return;

        breakdown.innerHTML = '';

        const investments = [
            { name: '📈 Your Stocks', change: event.stockChange, amount: this.gameState.stocks, color: 'stocks' },
            { name: '🏛️ Your Bonds', change: event.bondChange, amount: this.gameState.bonds, color: 'bonds' },
            { name: '📊 Your ETFs', change: event.etfChange, amount: this.gameState.etfs, color: 'etfs' },
            { name: '💵 Your Cash', change: 0, amount: this.gameState.cash, color: 'cash' }
        ];

        investments.forEach(investment => {
            if (investment.amount > 0) {
                const dollarChange = (investment.amount * investment.change) / 100;
                const item = document.createElement('div');
                item.className = `breakdown-item ${investment.color}`;

                item.innerHTML = `
                    <div class="breakdown-header">
                        <span class="investment-name">${investment.name}</span>
                        <span class="investment-amount">$${Math.round(investment.amount).toLocaleString()}</span>
                    </div>
                    <div class="breakdown-change">
                        <span class="change-percent ${investment.change >= 0 ? 'positive' : 'negative'}">
                            ${investment.change === 0 ? 'No change' : `${investment.change > 0 ? '+' : ''}${investment.change}%`}
                        </span>
                        <span class="change-dollar ${investment.change >= 0 ? 'positive' : 'negative'}">
                            ${dollarChange === 0 ? '$0' : `${dollarChange > 0 ? '+' : ''}$${Math.round(Math.abs(dollarChange)).toLocaleString()}`}
                        </span>
                    </div>
                `;

                breakdown.appendChild(item);
            }
        });
    }

    updateLearningSection(event) {
        const conceptTitle = document.getElementById('concept-title');
        const conceptExplanation = document.getElementById('concept-explanation');
        const nextMonthAdvice = document.getElementById('next-month-advice');

        if (conceptTitle) conceptTitle.textContent = event.conceptName;
        if (conceptExplanation) conceptExplanation.textContent = this.simplifyConceptDefinition(event.conceptDefinition);
        if (nextMonthAdvice) nextMonthAdvice.textContent = event.advice;
    }

    updateReportActions() {
        const continueBtn = document.getElementById('continue-learning-btn');
        const nextMonthNumber = document.getElementById('next-month-number');
        const currentMonthProgress = document.getElementById('current-month-progress');
        const progressFillReport = document.getElementById('progress-fill-report');

        if (nextMonthNumber) nextMonthNumber.textContent = this.gameState.month;
        if (currentMonthProgress) currentMonthProgress.textContent = this.gameState.month - 1;

        // Update progress bar
        if (progressFillReport) {
            const progressPercent = ((this.gameState.month - 1) / 12) * 100;
            progressFillReport.style.width = `${progressPercent}%`;
        }

        if (continueBtn) {
            if (this.gameState.month >= 12) {
                continueBtn.textContent = 'See Final Results! 🏆';
            } else {
                continueBtn.textContent = `Continue to Month ${this.gameState.month} 🚀`;
            }
        }
    }

    changeStrategy() {
        // Close the overlay
        const overlay = document.getElementById('month-report-overlay');
        if (overlay) {
            overlay.remove();
        }

        // Update display to show current state
        this.updateDisplay();

        // Show a helpful message
        const eventSection = document.getElementById('event-section');
        if (eventSection) {
            eventSection.style.display = 'block';
            eventSection.innerHTML = `
                <div class="strategy-change-message">
                    <h3>🎯 Adjust Your Strategy</h3>
                    <p>Based on what you learned, you can now adjust your investment allocation for next month!</p>
                    <p><strong>Current Month:</strong> ${this.gameState.month}</p>
                    <p><strong>Portfolio Value:</strong> $${Math.round(this.gameState.portfolioValue).toLocaleString()}</p>
                </div>
            `;
        }
    }

    setAllocationWithAnimation(allocation) {
        // Animate slider changes
        Object.keys(allocation).forEach((asset, index) => {
            setTimeout(() => {
                const slider = document.getElementById(`${asset}-slider`);
                const valueDisplay = document.getElementById(`${asset}-value`);
                if (slider && valueDisplay) {
                    // Animate the slider movement
                    const startValue = parseInt(slider.value);
                    const endValue = allocation[asset];
                    const duration = 800;
                    const startTime = Date.now();

                    const animateSlider = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

                        const currentValue = Math.round(startValue + (endValue - startValue) * easeProgress);
                        slider.value = currentValue;
                        valueDisplay.textContent = currentValue + '%';
                        valueDisplay.style.animation = 'countUp 0.3s ease';

                        if (progress < 1) {
                            requestAnimationFrame(animateSlider);
                        } else {
                            setTimeout(() => {
                                valueDisplay.style.animation = '';
                            }, 300);
                        }
                    };

                    animateSlider();
                }
            }, index * 150); // Stagger the animations
        });

        // Update allocation total and chart after animation
        setTimeout(() => {
            this.updateAllocationTotal();
            this.updateAllocationChart();
        }, 1000);
    }

    setAllocation(allocation) {
        Object.keys(allocation).forEach(asset => {
            const slider = document.getElementById(`${asset}-slider`);
            const valueDisplay = document.getElementById(`${asset}-value`);
            if (slider && valueDisplay) {
                slider.value = allocation[asset];
                valueDisplay.textContent = allocation[asset] + '%';
            }
        });
        this.updateAllocationTotal();
        setTimeout(() => {
            this.updateAllocationChart();
        }, 100);
    }

    updateAllocationTotal() {
        let total = 0;
        ['stocks', 'bonds', 'etfs', 'cash'].forEach(asset => {
            const slider = document.getElementById(`${asset}-slider`);
            if (slider) {
                total += parseInt(slider.value) || 0;
            }
        });

        const totalElement = document.getElementById('total-allocation');
        if (totalElement) {
            totalElement.textContent = total;
        }

        const warning = document.getElementById('allocation-warning');
        const nextBtn = document.getElementById('next-month-btn');

        if (total === 100) {
            if (warning) warning.style.display = 'none';
            if (nextBtn) nextBtn.disabled = false;
        } else {
            if (warning) warning.style.display = 'inline';
            if (nextBtn) nextBtn.disabled = true;
        }
    }

    nextMonth() {
        if (this.gameState.month >= 12) {
            this.endGame();
            return;
        }

        const nextBtn = document.getElementById('next-month-btn');
        if (nextBtn) {
            nextBtn.classList.add('loading');
            nextBtn.disabled = true;
        }

        // Show month transition animation
        this.showMonthTransition();

        setTimeout(() => {
            // Store previous portfolio value for comparison
            const previousValue = this.gameState.portfolioValue;

            // Get new allocation from sliders
            const stocksSlider = document.getElementById('stocks-slider');
            const bondsSlider = document.getElementById('bonds-slider');
            const etfsSlider = document.getElementById('etfs-slider');
            const cashSlider = document.getElementById('cash-slider');

            const newAllocation = {
                stocks: stocksSlider ? parseInt(stocksSlider.value) : 0,
                bonds: bondsSlider ? parseInt(bondsSlider.value) : 0,
                etfs: etfsSlider ? parseInt(etfsSlider.value) : 0,
                cash: cashSlider ? parseInt(cashSlider.value) : 100
            };

            // Apply allocation to portfolio
            this.applyAllocation(newAllocation);

            // Generate random market event
            const event = this.getRandomEvent();
            this.applyMarketEvent(event);

            // Update game state
            this.gameState.month++;
            this.gameState.history.push({
                month: this.gameState.month - 1,
                value: this.gameState.portfolioValue
            });

            // Hide transition and show guided results
            setTimeout(() => {
                this.hideMonthTransition();

                // Show simple overlay report
                this.showSimpleReport(event, previousValue);

                this.updateChart();
                this.saveGameState();

                if (nextBtn) {
                    nextBtn.classList.remove('loading');
                    nextBtn.disabled = false;
                }
            }, 2500);

        }, 300);
    }

    showMonthTransition() {
        const transition = document.getElementById('month-transition');
        const title = document.getElementById('transition-title');
        const subtitle = document.getElementById('transition-subtitle');

        const messages = [
            { title: '📊 Analyzing Markets...', subtitle: 'Processing global economic data...' },
            { title: '💹 Market Forces at Work...', subtitle: 'Supply and demand in action...' },
            { title: '🌍 Global Events Unfolding...', subtitle: 'Economic indicators updating...' },
            { title: '📈 Portfolio Rebalancing...', subtitle: 'Calculating new asset values...' },
            { title: '🎯 Strategy in Motion...', subtitle: 'Your investments are working...' }
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        title.textContent = randomMessage.title;
        subtitle.textContent = randomMessage.subtitle;

        transition.style.display = 'flex';
        transition.style.opacity = '0';

        // Fade in
        setTimeout(() => {
            transition.style.opacity = '1';
        }, 50);
    }

    hideMonthTransition() {
        const transition = document.getElementById('month-transition');
        transition.style.opacity = '0';

        setTimeout(() => {
            transition.style.display = 'none';
        }, 500);
    }

    displayEventWithAnimation(event) {
        // First hide the event section
        const eventSection = document.getElementById('event-section');
        eventSection.style.display = 'none';

        // Update content
        this.displayEvent(event);

        // Show with animation
        setTimeout(() => {
            eventSection.style.display = 'block';
            eventSection.style.opacity = '0';
            eventSection.style.transform = 'translateY(30px)';

            setTimeout(() => {
                eventSection.style.opacity = '1';
                eventSection.style.transform = 'translateY(0)';
                eventSection.style.transition = 'all 0.6s ease';
            }, 50);
        }, 100);
    }

    updateDisplayWithAnimation() {
        // Animate portfolio value change
        const portfolioElement = document.getElementById('portfolio-value');
        const changeElement = document.getElementById('portfolio-change');

        // Add dramatic animation to value changes
        portfolioElement.style.animation = 'pulse 0.8s ease';
        changeElement.style.animation = 'countUp 0.6s ease';

        // Update the display
        this.updateDisplay();

        // Reset animations
        setTimeout(() => {
            portfolioElement.style.animation = '';
            changeElement.style.animation = '';
        }, 800);
    }

    applyAllocation(allocation) {
        const totalValue = this.gameState.portfolioValue;
        
        this.gameState.stocks = (totalValue * allocation.stocks) / 100;
        this.gameState.bonds = (totalValue * allocation.bonds) / 100;
        this.gameState.etfs = (totalValue * allocation.etfs) / 100;
        this.gameState.cash = (totalValue * allocation.cash) / 100;
        
        this.gameState.allocation = allocation;
    }

    getRandomEvent() {
        // Use real market data if available
        if (this.marketData.useRealData && this.marketData.lastUpdate) {
            return this.generateRealMarketEvent();
        }

        // Fallback to simulated events
        const availableEvents = MARKET_EVENTS.filter(event =>
            !this.gameState.usedEvents.includes(event.id)
        );

        if (availableEvents.length === 0) {
            this.gameState.usedEvents = [];
            return MARKET_EVENTS[Math.floor(Math.random() * MARKET_EVENTS.length)];
        }

        const event = availableEvents[Math.floor(Math.random() * availableEvents.length)];
        this.gameState.usedEvents.push(event.id);
        return event;
    }

    generateRealMarketEvent() {
        const stockChange = this.marketData.stocks.change;
        const bondChange = this.marketData.bonds.change;
        const etfChange = this.marketData.etfs.change;

        // Generate event title based on market performance
        let title, description, conceptName, conceptDefinition, advice;

        if (stockChange > 2) {
            title = "Stock Market Rally";
            description = `Stocks surged today with the S&P 500 gaining ${stockChange.toFixed(1)}%. Strong corporate earnings and positive economic data drove investor optimism.`;
            conceptName = "Bull Market Dynamics";
            conceptDefinition = "A bull market occurs when stock prices rise consistently, often driven by strong economic fundamentals and investor confidence.";
            advice = "Consider taking some profits and rebalancing your portfolio to maintain your target allocation.";
        } else if (stockChange < -2) {
            title = "Market Correction";
            description = `Markets declined today with the S&P 500 falling ${Math.abs(stockChange).toFixed(1)}%. Concerns about economic uncertainty led to widespread selling.`;
            conceptName = "Market Volatility";
            conceptDefinition = "Market volatility refers to the degree of price fluctuation in financial markets, which is normal and expected.";
            advice = "Stay calm during market downturns. This could be a good time to buy quality investments at lower prices.";
        } else if (bondChange > 1) {
            title = "Bond Market Strength";
            description = `Treasury bonds gained ${bondChange.toFixed(1)}% as investors sought safety amid market uncertainty. Bond prices rise when yields fall.`;
            conceptName = "Flight to Safety";
            conceptDefinition = "During uncertain times, investors often move money from risky assets like stocks to safer assets like government bonds.";
            advice = "Bonds can provide stability in your portfolio, especially during volatile market periods.";
        } else if (Math.abs(stockChange) < 1 && Math.abs(bondChange) < 1) {
            title = "Quiet Trading Day";
            description = `Markets moved sideways today with minimal changes across asset classes. Trading volume was light as investors awaited new economic data.`;
            conceptName = "Market Consolidation";
            conceptDefinition = "Consolidation periods occur when markets trade in a narrow range, often before making their next major move.";
            advice = "Quiet markets are good times to review and rebalance your portfolio allocation.";
        } else {
            title = "Mixed Market Signals";
            description = `Markets showed mixed performance today with stocks ${stockChange >= 0 ? 'gaining' : 'losing'} ${Math.abs(stockChange).toFixed(1)}% and bonds ${bondChange >= 0 ? 'gaining' : 'losing'} ${Math.abs(bondChange).toFixed(1)}%.`;
            conceptName = "Asset Class Rotation";
            conceptDefinition = "Different asset classes often perform differently based on economic conditions and investor sentiment.";
            advice = "Diversification across asset classes helps smooth out portfolio performance over time.";
        }

        return {
            id: `real_${Date.now()}`,
            title: title,
            description: description,
            stockChange: stockChange,
            bondChange: bondChange,
            etfChange: etfChange,
            mentorExplanation: `Today's real market data shows ${title.toLowerCase()}. This is based on actual market performance.`,
            conceptName: conceptName,
            conceptDefinition: conceptDefinition,
            advice: advice,
            isRealData: true,
            date: new Date().toLocaleDateString()
        };
    }

    applyMarketEvent(event) {
        // Apply percentage changes to each asset class
        this.gameState.stocks *= (1 + event.stockChange / 100);
        this.gameState.bonds *= (1 + event.bondChange / 100);
        this.gameState.etfs *= (1 + event.etfChange / 100);
        // Cash remains unchanged

        // Calculate new portfolio value
        this.gameState.portfolioValue = 
            this.gameState.stocks + 
            this.gameState.bonds + 
            this.gameState.etfs + 
            this.gameState.cash;
    }

    displayEvent(event) {
        document.getElementById('event-section').style.display = 'block';
        document.getElementById('event-title').textContent = event.title;
        document.getElementById('event-description').textContent = event.description;

        // Display market changes
        this.displayChange('stocks-change', event.stockChange);
        this.displayChange('bonds-change', event.bondChange);
        this.displayChange('etfs-change', event.etfChange);

        // Display mentor content
        document.getElementById('mentor-explanation').textContent = event.mentorExplanation;
        document.getElementById('concept-name').textContent = event.conceptName;
        document.getElementById('concept-definition').textContent = event.conceptDefinition;
        document.getElementById('mentor-advice').textContent = event.advice;
    }

    displayChange(elementId, change) {
        const element = document.getElementById(elementId);
        const sign = change >= 0 ? '+' : '';
        element.textContent = `${sign}${change}%`;
        element.className = `change-value ${change >= 0 ? 'positive' : 'negative'}`;
    }

    updateDisplay() {
        // Portfolio value
        const portfolioElement = document.getElementById('portfolio-value');
        if (portfolioElement) {
            portfolioElement.textContent = `$${Math.round(this.gameState.portfolioValue).toLocaleString()}`;
        }

        // Portfolio change
        if (this.gameState.history.length > 1) {
            const previousValue = this.gameState.history[this.gameState.history.length - 2].value;
            const change = this.gameState.portfolioValue - previousValue;
            const changePercent = ((change / previousValue) * 100).toFixed(1);
            const changeElement = document.getElementById('portfolio-change');
            if (changeElement) {
                const sign = change >= 0 ? '+' : '';
                changeElement.textContent = `${sign}$${Math.round(Math.abs(change)).toLocaleString()} (${sign}${changePercent}%)`;
                changeElement.className = `change ${change >= 0 ? 'positive' : 'negative'}`;
            }
        }

        // Current month and progress
        const monthElement = document.getElementById('current-month');
        if (monthElement) {
            monthElement.textContent = this.gameState.month;
        }

        // Update progress bar
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            const progressPercent = (this.gameState.month / 12) * 100;
            progressFill.style.width = `${progressPercent}%`;
        }

        // Update allocation display
        this.updateAllocationDisplay();

        // Update next month button text
        this.updateNextMonthButton();
    }

    updateNextMonthButton() {
        const nextMonthBtn = document.getElementById('next-month-btn');
        if (nextMonthBtn) {
            if (this.gameState.month === 1) {
                nextMonthBtn.textContent = 'Start Month 1 🚀';
            } else if (this.gameState.month > 12) {
                nextMonthBtn.textContent = 'Game Complete! 🏆';
                nextMonthBtn.disabled = true;
            } else {
                nextMonthBtn.textContent = `Start Month ${this.gameState.month} 🚀`;
            }
        }
    }

    updateAllocationDisplay() {
        const total = this.gameState.portfolioValue;
        if (total === 0) return;

        const percentages = {
            stocks: (this.gameState.stocks / total) * 100,
            bonds: (this.gameState.bonds / total) * 100,
            etfs: (this.gameState.etfs / total) * 100,
            cash: (this.gameState.cash / total) * 100
        };

        Object.keys(percentages).forEach(asset => {
            const percent = percentages[asset].toFixed(1);
            const percentElement = document.getElementById(`${asset}-percent`);
            if (percentElement) {
                percentElement.textContent = `${percent}%`;
            }
        });

        this.updateAllocationChart();
    }

    initAllocationChart() {
        const chartElement = document.getElementById('allocation-chart');
        if (!chartElement) {
            // Retry after a short delay if element doesn't exist yet
            setTimeout(() => this.initAllocationChart(), 200);
            return;
        }

        // Destroy existing chart if it exists
        if (this.allocationChart) {
            this.allocationChart.destroy();
        }

        const ctx = chartElement.getContext('2d');
        this.allocationChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Stocks', 'Bonds', 'ETFs', 'Cash'],
                datasets: [{
                    data: [0, 0, 0, 100],
                    backgroundColor: [
                        'rgb(59, 130, 246)',  // stocks-color
                        'rgb(16, 185, 129)',  // bonds-color
                        'rgb(245, 158, 11)',  // etfs-color
                        'rgb(107, 114, 128)'  // cash-color
                    ],
                    borderWidth: 0,
                    cutout: '60%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 800
                }
            }
        });
    }

    updateAllocationChart() {
        if (!this.allocationChart) {
            this.initAllocationChart();
            return;
        }

        try {
            const total = this.gameState.portfolioValue;
            if (total === 0) {
                this.allocationChart.data.datasets[0].data = [0, 0, 0, 100];
            } else {
                this.allocationChart.data.datasets[0].data = [
                    (this.gameState.stocks / total) * 100,
                    (this.gameState.bonds / total) * 100,
                    (this.gameState.etfs / total) * 100,
                    (this.gameState.cash / total) * 100
                ];
            }
            this.allocationChart.update('none');
        } catch (error) {
            console.log('Allocation chart update error, reinitializing...', error);
            this.initAllocationChart();
        }
    }

    initChart() {
        const chartElement = document.getElementById('portfolio-chart');
        if (!chartElement) {
            // Retry after a short delay if element doesn't exist yet
            setTimeout(() => this.initChart(), 200);
            return;
        }

        // Destroy existing chart if it exists
        if (this.chart) {
            this.chart.destroy();
        }

        const ctx = chartElement.getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.gameState.history.map(h => `Month ${h.month}`),
                datasets: [{
                    label: 'Portfolio Value',
                    data: this.gameState.history.map(h => h.value),
                    borderColor: 'rgb(37, 99, 235)',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgb(37, 99, 235)',
                    pointBorderColor: 'white',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    }
                }
            }
        });
    }

    updateChart() {
        if (!this.chart) {
            this.initChart();
            return;
        }

        try {
            this.chart.data.labels = this.gameState.history.map(h => `Month ${h.month}`);
            this.chart.data.datasets[0].data = this.gameState.history.map(h => h.value);
            this.chart.update('none');
        } catch (error) {
            console.log('Chart update error, reinitializing...', error);
            this.initChart();
        }
    }

    saveGameState() {
        localStorage.setItem('financialGameState', JSON.stringify(this.gameState));
    }

    loadGameState() {
        const saved = localStorage.getItem('financialGameState');
        if (saved) {
            this.gameState = JSON.parse(saved);
        }
    }

    restartGame() {
        localStorage.removeItem('financialGameState');
        this.gameState = {
            month: 1,
            portfolioValue: 10000,
            cash: 10000,
            stocks: 0,
            bonds: 0,
            etfs: 0,
            allocation: { stocks: 0, bonds: 0, etfs: 0, cash: 100 },
            history: [{ month: 0, value: 10000 }],
            usedEvents: []
        };

        // Reset UI
        document.getElementById('event-section').style.display = 'none';
        document.getElementById('game-over-modal').style.display = 'none';
        document.getElementById('leaderboard-modal').style.display = 'none';
        document.getElementById('about-modal').style.display = 'none';

        // Reset strategy selection
        document.querySelectorAll('.preset-card').forEach(card => {
            card.classList.remove('selected');
        });
        const customAllocation = document.getElementById('custom-allocation');
        if (customAllocation) {
            customAllocation.style.display = 'none';
        }

        const nextBtn = document.getElementById('next-month-btn');
        if (nextBtn) {
            nextBtn.disabled = true;
            nextBtn.textContent = '🚀 Start Month 1';
        }

        // Reset sliders
        ['stocks', 'bonds', 'etfs'].forEach(asset => {
            const slider = document.getElementById(`${asset}-slider`);
            const valueDisplay = document.getElementById(`${asset}-value`);
            if (slider && valueDisplay) {
                slider.value = 0;
                valueDisplay.textContent = '0%';
                slider.disabled = false;
            }
        });

        const cashSlider = document.getElementById('cash-slider');
        const cashValue = document.getElementById('cash-value');
        const cashContainer = document.querySelector('.slider-container:last-child');
        if (cashSlider && cashValue) {
            cashSlider.value = 100;
            cashValue.textContent = '100%';
            cashSlider.disabled = false;
        }
        if (cashContainer) {
            cashContainer.classList.remove('cash-auto');
        }

        // Show welcome screen
        document.getElementById('welcome-screen').style.display = 'flex';
        document.getElementById('game-container').style.display = 'none';

        // Reset charts
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
        if (this.allocationChart) {
            this.allocationChart.destroy();
            this.allocationChart = null;
        }

        this.updateAllocationTotal();
    }

    endGame() {
        const finalValue = this.gameState.portfolioValue;
        const totalReturn = ((finalValue - 10000) / 10000 * 100).toFixed(1);
        
        let performance;
        if (totalReturn >= 20) performance = "Excellent! 🏆";
        else if (totalReturn >= 10) performance = "Great! 🎉";
        else if (totalReturn >= 0) performance = "Good! 👍";
        else if (totalReturn >= -10) performance = "Learning Experience 📚";
        else performance = "Keep Practicing! 💪";

        document.getElementById('final-value').textContent = `$${Math.round(finalValue).toLocaleString()}`;
        document.getElementById('total-return').textContent = `${totalReturn >= 0 ? '+' : ''}${totalReturn}%`;
        document.getElementById('performance-rating').textContent = performance;
        
        document.getElementById('game-over-modal').style.display = 'flex';
    }

    saveScore() {
        const playerName = document.getElementById('player-name').value.trim() || 'Anonymous';
        const score = {
            name: playerName,
            value: Math.round(this.gameState.portfolioValue),
            return: ((this.gameState.portfolioValue - 10000) / 10000 * 100).toFixed(1),
            date: new Date().toLocaleDateString(),
            isUser: true
        };

        let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
        leaderboard.push(score);
        leaderboard.sort((a, b) => b.value - a.value);
        leaderboard = leaderboard.slice(0, 20); // Keep top 20 user scores

        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        document.getElementById('game-over-modal').style.display = 'none';
        this.showLeaderboard();
    }

    showLeaderboard() {
        const userScores = JSON.parse(localStorage.getItem('leaderboard') || '[]');
        const fakeLeaderboard = this.generateFakeLeaderboard();

        // Combine user scores with fake data
        const combinedLeaderboard = [...userScores, ...fakeLeaderboard]
            .sort((a, b) => b.value - a.value)
            .slice(0, 50); // Show top 50

        const listElement = document.getElementById('leaderboard-list');

        if (combinedLeaderboard.length === 0) {
            listElement.innerHTML = '<p>No scores yet. Be the first!</p>';
        } else {
            listElement.innerHTML = combinedLeaderboard.map((score, index) => `
                <div class="leaderboard-entry ${score.isUser ? 'user-score' : ''}">
                    <span class="rank">${index + 1}.</span>
                    <span class="name">${score.name}</span>
                    <span class="value">$${score.value.toLocaleString()}</span>
                    <span class="return ${score.return >= 0 ? 'positive' : 'negative'}">${score.return >= 0 ? '+' : ''}${score.return}%</span>
                    <span class="date">${score.date}</span>
                </div>
            `).join('');
        }

        document.getElementById('leaderboard-modal').style.display = 'flex';
    }

    generateFakeLeaderboard() {
        const firstNames = [
            'Alex', 'Sarah', 'Mike', 'Emma', 'David', 'Jessica', 'Ryan', 'Ashley', 'Kevin', 'Amanda',
            'Tyler', 'Madison', 'Brandon', 'Olivia', 'Justin', 'Hannah', 'Zachary', 'Samantha', 'Andrew', 'Taylor',
            'Nicholas', 'Alexis', 'Jacob', 'Alyssa', 'Ethan', 'Kayla', 'Nathan', 'Rachel', 'Daniel', 'Megan',
            'Christopher', 'Lauren', 'Anthony', 'Victoria', 'William', 'Jasmine', 'Matthew', 'Brianna', 'Joshua', 'Morgan',
            'Michael', 'Destiny', 'Alexander', 'Kimberly', 'James', 'Paige', 'Benjamin', 'Jenna', 'Logan', 'Stephanie'
        ];

        const lastNames = [
            'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
            'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
            'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
            'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
            'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts'
        ];

        const leaderboard = [];
        const usedNames = new Set();

        for (let i = 0; i < 48; i++) { // 48 fake users + potential user scores
            let name;
            do {
                const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
                const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                name = `${firstName} ${lastName.charAt(0)}.`;
            } while (usedNames.has(name));

            usedNames.add(name);

            // Generate realistic portfolio values
            let value;
            if (i < 3) {
                // Top performers
                value = Math.floor(Math.random() * 4000) + 14000; // $14,000 - $18,000
            } else if (i < 10) {
                // Good performers
                value = Math.floor(Math.random() * 3000) + 11000; // $11,000 - $14,000
            } else if (i < 25) {
                // Average performers
                value = Math.floor(Math.random() * 2000) + 9000; // $9,000 - $11,000
            } else {
                // Below average
                value = Math.floor(Math.random() * 2000) + 7000; // $7,000 - $9,000
            }

            const returnPercent = ((value - 10000) / 10000 * 100).toFixed(1);

            // Generate dates from the past few months
            const daysAgo = Math.floor(Math.random() * 90);
            const date = new Date();
            date.setDate(date.getDate() - daysAgo);

            leaderboard.push({
                name: name,
                value: value,
                return: returnPercent,
                date: date.toLocaleDateString(),
                isUser: false
            });
        }

        return leaderboard;
    }


}

// Global tutorial functions
let gameInstance = null;
let currentTutorialSlide = 1;
const totalTutorialSlides = 4;

function showTutorialSlide(slideNumber) {
    if (gameInstance) {
        gameInstance.showTutorialSlide(slideNumber);
        currentTutorialSlide = slideNumber;
        updateTutorialNavigation();
    }
}

function goToNextSlide() {
    if (currentTutorialSlide < totalTutorialSlides) {
        showTutorialSlide(currentTutorialSlide + 1);
    } else {
        finishTutorial();
    }
}

function goToPreviousSlide() {
    if (currentTutorialSlide > 1) {
        showTutorialSlide(currentTutorialSlide - 1);
    } else {
        // Go back to welcome screen
        document.getElementById('tutorial-screen').style.display = 'none';
        document.getElementById('welcome-screen').style.display = 'flex';
    }
}

function updateTutorialNavigation() {
    const prevBtn = document.getElementById('tutorial-prev-btn');
    const nextBtn = document.getElementById('tutorial-next-btn');

    if (!prevBtn || !nextBtn) return;

    // Update previous button
    if (currentTutorialSlide === 1) {
        prevBtn.textContent = '← Back to Home';
    } else {
        prevBtn.textContent = '← Previous';
    }

    // Update next button
    if (currentTutorialSlide === totalTutorialSlides) {
        nextBtn.textContent = "I'm Ready to Start! 🚀";
        nextBtn.classList.add('pulse-animation');
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.classList.remove('pulse-animation');
    }
}

function finishTutorial() {
    if (gameInstance) {
        gameInstance.startGameFromTutorial();
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Add a small delay to ensure all elements are rendered
        setTimeout(() => {
            gameInstance = new FinancialGame();
        }, 100);
    } catch (error) {
        console.error('Error initializing game:', error);
        // Retry once after a longer delay
        setTimeout(() => {
            try {
                gameInstance = new FinancialGame();
            } catch (retryError) {
                console.error('Retry failed:', retryError);
            }
        }, 1000);
    }
});

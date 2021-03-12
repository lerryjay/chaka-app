import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRoutingModule } from './market-routing.module';

import { HighlightsComponent } from './components/highlights/highlights.component';
import { DividendsComponent } from './components/dividends/dividends.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { SectorPerformanceComponent } from './components/sector-performance/sector-performance.component';
import { MarketComponent } from './market.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { SectorItemComponent } from './components/sector-item/sector-item.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HighlightsComponent, DividendsComponent, EarningsComponent, SectorPerformanceComponent, MarketComponent, StocksComponent, WatchlistComponent, SectorItemComponent],
  imports: [
    CommonModule,
    MarketRoutingModule,
    FontAwesomeModule
  ]
})
export class MarketModule { }

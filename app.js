const STORAGE_KEY = 'gymweb-items';
const form = document.querySelector('#entry-form');
const search = document.querySelector('#search');
const list = document.querySelector('#items');
const summary = document.querySelector('#summary');
const seed = [{"id":"seed-0","title":"Morning Architecture Block","category":"Deep Work"},{"id":"seed-1","title":"Zero-Inbox Triage","category":"Code Review"}];
let items;
try { items = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? seed; } catch { items = seed; }


import { track } from 'ripple';

export interface StashItem {
	id: string;
	text: string;
	preview: string;
	timestamp: number;
}

const STASHES_KEY = 'wc-stashes';
const MAX_STASHES = 20;

export function loadStashes(): StashItem[] {
	const stored = localStorage.getItem(STASHES_KEY);
	if (!stored) return [];
	return JSON.parse(stored);
}

export function saveStashes(stashes: StashItem[]) {
	localStorage.setItem(STASHES_KEY, JSON.stringify(stashes));
}

export function createStash(text: string): StashItem {
	const preview = text.trim().slice(0, 60) || '(empty)';
	return {
		id: crypto.randomUUID(),
		text,
		preview: preview.length >= 60 ? preview + '…' : preview,
		timestamp: Date.now(),
	};
}

export function addStash(stashes: StashItem[], text: string): StashItem[] {
	const newStash = createStash(text);
	const newStashes = [newStash, ...stashes].slice(0, MAX_STASHES);
	saveStashes(newStashes);
	return newStashes;
}

export function removeStash(stashes: StashItem[], id: string): StashItem[] {
	const newStashes = stashes.filter((s) => s.id !== id);
	saveStashes(newStashes);
	return newStashes;
}

export function getRelativeTime(timestamp: number): string {
	const seconds = Math.floor((Date.now() - timestamp) / 1000);

	if (seconds < 60) return 'just now';
	if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
	if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
	return `${Math.floor(seconds / 86400)}d ago`;
}

export interface CommandItem {
	id: string;
	label: string;
	icon: string;
	action: () => void;
	keywords?: string[];
	shortcut?: string;
}

export function filterCommands(commands: CommandItem[], query: string): CommandItem[] {
	if (!query.trim()) return commands;

	const normalizedQuery = query.toLowerCase().trim();
	return commands.filter((cmd) => {
		const text = (cmd.label + ' ' + (cmd.keywords?.join(' ') || '')).toLowerCase();
		return text.includes(normalizedQuery);
	});
}

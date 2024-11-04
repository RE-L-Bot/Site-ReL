const flagsUserObj = {
	SATFF: 1 << 0,
	PARTNER: 1 << 1,
	HYPESQUAD: 1 << 2,
	BUG_HUNTER_LEVEL_1: 1 << 3,
	HYPESQUAD_ONLINE_HOUSE_1: 1 << 6,
	HYPESQUAD_ONLINE_HOUSE_2: 1 << 7,
	HYPESQUAD_ONLINE_HOUSE_3: 1 << 8,
	PREMIUM_EARLY_SUPPORTER: 1 << 9,
	TEAM_PSEUDO_USER: 1 << 10,
	BUG_HUNTER_LEVEL_2: 1 << 14,
	VERIFIED_BOT: 1 << 16,
	VERIFIED_DEVELOPER: 1 << 17,
	CERTIFIED_MODERATOR: 1 << 18,
	BOT_HTTP_INTERACTIONS: 1 << 19,
	EMBED_ACTIVE_DEVELOPERLINKS: 1 << 22,
};
export function flagsUser(permBitfield) {
    let currentPermissions = [];
    const permissionUpper = Math.floor(permBitfield / 0x100000000);
    const permissionLower = Math.floor(permBitfield % 0x100000000);
    for (let key in flagsUserObj) {
        if ((flagsUserObj[key] >= 0x100000000 && (permissionUpper & Math.floor(flagsUserObj[key] / 0x100000000))) || (flagsUserObj[key] < 0x100000000 && (permissionLower & flagsUserObj[key]))) {
            currentPermissions.push(key);
        } else {
            continue;
        };
    };
    return currentPermissions;
}

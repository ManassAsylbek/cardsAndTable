
export type Nullable<T> =null | T

export interface IResponseCardApi {
    "next": string,
    "previous": null,
    "assets":ICard[]
}

export interface ICard {
    "id": number,
    "num_sales": number,
    "background_color": null,
    "image_url": string,
    "image_preview_url": string,
    "image_thumbnail_url": string,
    "image_original_url": null,
    "animation_url": null,
    "animation_original_url": null,
    "name": string,
    "description": null,
    "external_link": null,
    "asset_contract": {
        "address": string,
        "asset_contract_type": string,
        "created_date": string,
        "name": string,
        "nft_version": null,
        "opensea_version": string,
        "owner": number,
        "schema_name": string,
        "symbol": string,
        "total_supply": null,
        "description": string,
        "external_link": null,
        "image_url": string,
        "default_to_fiat": boolean,
        "dev_buyer_fee_basis_points": number,
        "dev_seller_fee_basis_points": number,
        "only_proxied_transfers": boolean,
        "opensea_buyer_fee_basis_points": number,
        "opensea_seller_fee_basis_points": number,
        "buyer_fee_basis_points": number,
        "seller_fee_basis_points": number,
        "payout_address": null
    },
    "permalink": string,
    "collection": {
        "payment_tokens": [
            {
                "id": number,
                "symbol": string,
                "address": string,
                "image_url": string,
                "name": string,
                "decimals": number,
                "eth_price": number,
                "usd_price": number
            },
            {
                "id": number,
                "symbol": string,
                "address": string,
                "image_url": string,
                "name": string,
                "decimals": number,
                "eth_price": number,
                "usd_price": number
            }
        ],
        "primary_asset_contracts": [],
        "traits": {},
        "stats": {
            "one_hour_volume": number,
            "one_hour_change": number,
            "one_hour_sales": number,
            "one_hour_sales_change": number,
            "one_hour_average_price": number,
            "one_hour_difference": number,
            "six_hour_volume": number,
            "six_hour_change": number,
            "six_hour_sales": number,
            "six_hour_sales_change": number,
            "six_hour_average_price":number,
            "six_hour_difference": number,
            "one_day_volume": number,
            "one_day_change": number,
            "one_day_sales":number,
            "one_day_sales_change": number,
            "one_day_average_price": number,
            "one_day_difference": number,
            "seven_day_volume": number,
            "seven_day_change": number,
            "seven_day_sales": number,
            "seven_day_average_price": number,
            "seven_day_difference": number,
            "thirty_day_volume": number,
            "thirty_day_change": number,
            "thirty_day_sales": number,
            "thirty_day_average_price": number,
            "thirty_day_difference":number,
            "total_volume": number,
            "total_sales": number,
            "total_supply": number,
            "count": number,
            "num_owners": number,
            "average_price": number,
            "num_reports": number,
            "market_cap": number,
            "floor_price": number
        },
        "banner_image_url": null,
        "chat_url": null,
        "created_date": string,
        "default_to_fiat": boolean,
        "description": string,
        "dev_buyer_fee_basis_points": string,
        "dev_seller_fee_basis_points": string,
        "discord_url": null,
        "display_data": {
            "card_display_style": string
        },
        "external_url": null,
        "featured": boolean,
        "featured_image_url": string,
        "hidden": boolean,
        "safelist_request_status": string,
        "image_url": string,
        "is_subject_to_whitelist": boolean,
        "large_image_url": string,
        "medium_username": null,
        "name": string,
        "only_proxied_transfers": boolean,
        "opensea_buyer_fee_basis_points": string,
        "opensea_seller_fee_basis_points": string,
        "payout_address": null,
        "require_email": boolean,
        "short_description": null,
        "slug": string,
        "telegram_url": null,
        "twitter_username": null,
        "instagram_username": null,
        "wiki_url": null,
        "is_nsfw": boolean,
        "fees": {
            "seller_fees": {},
            "opensea_fees": {
                "0x0000a26b00c1f0df003000390027140000faa719": number
            }
        },
        "is_rarity_enabled": boolean
    },
    "decimals": null,
    "token_metadata": null,
    "is_nsfw": boolean,
    "owner": {
        "user": {
            "username": string
        },
        "profile_img_url": string,
        "address": string,
        "config": string
    },
    "seaport_sell_orders": null,
    "creator": {
        "user": {
            "username": string
        },
        "profile_img_url": string,
        "address": string,
        "config": string
    },
    "traits": [],
    "last_sale": string,
    "top_bid": null,
    "listing_date": null,
    "is_presale": boolean,
    "supports_wyvern": boolean,
    "rarity_data": null,
    "transfer_fee": null,
    "transfer_fee_payment_token": null,
    "related_assets": [],
    "orders": null,
    "auctions": [],
    "top_ownerships": [
        {
            "owner": {
                "user": {
                    "username": string
                },
                "profile_img_url": string,
                "address": string,
                "config": string
            },
            "quantity": string,
            "created_date": string
        }
    ],
    "ownership": null,
    "highest_buyer_commitment": null,
    "token_id": string
}
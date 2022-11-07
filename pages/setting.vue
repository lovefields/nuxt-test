<template>
    <div class="account-setting-page bg-gray">
        <div class="content-box">
            <h1 class="title">설정</h1>

            <div class="list">
                <div class="link" v-if="isKakaoUser"><p><span class="kakao-icon"></span>카카오 계정 연동 됨</p></div>
                <a href="/logout" class="link">로그아웃</a>
                <a href="/account/delete" class="link">회원탈퇴</a>
            </div>
        </div>
    </div>
</template>